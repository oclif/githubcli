import {Command} from '@oclif/command'
import axios from 'axios'

export default class Stars extends Command {
  static description = 'show the github stars on a repository'
  static args = [{name: 'repository', required: true}]
  async run() {
    const {args} = this.parse(Stars)
    const {data: stargazers} = await axios.get(`https://api.github.com/repos/${args.repository}/stargazers`)
    for (let s of stargazers) {
      this.log(s.login)
    }
  }
}
