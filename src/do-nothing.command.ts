import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'do-nothing',
  description: 'Testing CLI',
})
export class DoNothingCommand extends CommandRunner {
  constructor() {
    super();
  }
  async run(): Promise<void> {
    console.log('testing nest-commander');
  }
}
