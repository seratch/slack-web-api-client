#!/usr/bin/env ruby
Dir.glob(__dir__ + '/../src_deno/**/*').select { |f| File.file? f }.each do |filepath|
  output = "";
  File.readlines(filepath).each do |line|
    if line.include?(' from "')
      output += line.sub(/";$/, '.ts";')
    else
      output += line
    end
  end
  File.open(filepath, 'w') { |f| f.write(output) }
end

File.open(__dir__ + '/../src_deno/mod.ts', 'w') { |f|
  f.write('export * from "./index.ts"' + "\n")
}
