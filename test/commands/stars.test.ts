import {expect, test} from '@oclif/test'

describe('stars', () => {
  test
  .nock('https://api.github.com', api => {
    api
    .get('/repos/oclif/oclif/stargazers')
    .reply(
      () => ([
        200,
        [
          {login: 'heroku'},
          {login: 'oclif'},
          {login: 'javascript'},
        ],
      ]),
    )
  })
  .stdout()
  .command(['stars', 'oclif/oclif'])
  .it('lists stargazers from repo', ctx => {
    expect(ctx.stdout).to.contain('heroku')
    expect(ctx.stdout).to.contain('oclif')
    expect(ctx.stdout).to.contain('javascript')
  })
})
