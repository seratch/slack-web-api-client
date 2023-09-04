export interface Workflow {
  trigger: WorkflowTrigger;
}

export interface WorkflowTrigger {
  url: string;
  customizable_input_parameters?: WorkflowTriggerInputParameter[];
}

export interface WorkflowTriggerInputParameter {
  name: string;
  value: string;
}
