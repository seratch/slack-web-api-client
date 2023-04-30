#!/usr/bin/env ruby
#
# prerequisites
#   npm install quicktype

require 'open3'

index_file = __dir__ + '/../src/client/generated-response/index.ts'
File.truncate(index_file, 0)

class TsWriter

  NOTICE = [
    "// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface",
    "///////////////////////////////////",
    "// !!! DO NOT EDIT THIS FILE !!! //",
    "///////////////////////////////////",
    ""
  ].join("\n")


  def write(root_class_name, json_path, typedef_filepath, input_json)
    cmd = "npx quicktype --just-types --alphabetize-properties --all-properties-optional --acronym-style original -t #{root_class_name} -l ts"
    puts "Generating #{root_class_name} from #{json_path}"
    Open3.popen3(cmd) do |stdin, stdout, stderr, wait_thr|
      stdin.write(input_json)
      stdin.close()
      generated_code = stdout.read
      source = "#{NOTICE}\nimport { SlackAPIResponse } from '../response';\n"
      if generated_code.match? /blocks\?:\s+Block\[\]/
        if root_class_name.start_with? "Views"
          if root_class_name.start_with? "viewsPublish"
            source += "import { AnyModalBlock } from '../../block-kit/blocks';\n"
          else
            source += "import { AnyHomeTabBlock } from '../../block-kit/blocks';\n"
          end
        else
          source += "import { AnyMessageBlock } from '../../block-kit/blocks';\n"
        end
      end
      if generated_code.match? /attachments\?:\s+Attachment\[\]/
        source += "import { MessageAttachment } from '../../block-kit/message-attachment';\n"
      end
      source += generated_code

      source.gsub!(
        "export interface #{root_class_name} {",
        "export type #{root_class_name} = SlackAPIResponse & {"
      )
      source.gsub!(" ok?:", " ok: ")

      if generated_code.match? /blocks\?:\s+Block\[\]/
        if root_class_name.start_with? "Views"
          if root_class_name.start_with? "viewsPublish"
            source.gsub!(" Block[];", " AnyModalBlock[];")
          else
            source.gsub!(" Block[];", " AnyHomeTabBlock[];")
          end
        else
          source.gsub!(" Block[];", " AnyMessageBlock[];")
        end
      end
      if generated_code.match? /attachments\?:\s+Attachment\[\]/
        source.gsub!(" Attachment[];", " MessageAttachment[];")
      end
      source.gsub!(" EventPayload;", " any;")

      source.gsub!(/^    /, '  ')
      source.gsub!('"', "'")
      source.sub!(/^}$/, '};')
      File.open(typedef_filepath, 'w') { |f|
        f.write(source)
      }
    end
  end

  def append_to_index(root_class_name, index_file)
    File.open(index_file, 'a') do |index_f|
      index_f.puts("export type { #{root_class_name} } from './#{root_class_name}';")
    end
  end
end

ts_writer = TsWriter.new

Dir.glob(__dir__ + '/../tmp/java-slack-sdk/json-logs/samples/api/*').sort.each do |json_path|
  File.open(json_path) do |json_file|
    root_class_name = ''
    prev_c = nil
    filename = json_path.split('/').last.gsub(/\.json$/, '')
    if filename.include? "admin.analytics.getFile"
      next
    elsif filename == "oauth.access"
      next
    elsif filename == "oauth.token"
      next
    elsif filename.start_with? "rtm."
      next
    elsif filename.start_with? "files.comments."
      next
    elsif filename.start_with? "dialog."
      next
    elsif filename.start_with? "calls."
      next
    elsif filename.start_with? "workflows."
      next
    elsif filename.start_with? "channels."
      next
    elsif filename.start_with? "groups."
      next
    elsif filename.start_with? "mpim."
      next
    elsif filename.start_with? "im."
      next
    end
    filename.split('').each do |c|
      if prev_c.nil? || prev_c == '.'
        root_class_name << c.upcase
      elsif c == '.'
        # noop
      else
        root_class_name << c
      end
      prev_c = c
    end
    if root_class_name.start_with? 'Oauth'
        root_class_name.sub!('Oauth', 'OAuth')
    end
    if root_class_name.start_with? 'Openid'
    root_class_name.sub!('Openid', 'OpenID')
    end
    
    root_class_name << 'Response'
    typedef_filepath = __dir__ + "/../src/client/generated-response/#{root_class_name}.ts"
    input_json = json_file.read
    ts_writer.write(root_class_name, json_path, typedef_filepath, input_json)
    ts_writer.append_to_index(root_class_name, index_file)
  end
end