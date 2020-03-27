describe('LoginTest', function () {
  beforeEach(function () {
    this.actionwords = Object.create(Actionwords);
  });

  describe('Login with combination of valid and invalid username and password', function () {
    function loginWithCombinationOfValidAndInvalidUsernameAndPassword (url, username, password, result, message) {
      // Given the url "<url>" is loaded
      this.actionwords.theUrlP1IsLoaded(url);
      // When the user enters the username "<username>"
      this.actionwords.theUserEntersTheUsernameP1(username);
      // And enters the passrowd "<password>"
      this.actionwords.entersThePassrowdPassword(password);
      // And submits using the login button
      this.actionwords.submitsUsingTheLoginButton();
      // Then it results in "<result>"
      this.actionwords.itResultsInP1(result);
      // And the following message is displayed "<message>"
      this.actionwords.theFollowingMessageIsDisplayedP1(message);
    }

    it('User enters valid username and password', function () {
      loginWithCombinationOfValidAndInvalidUsernameAndPassword.apply(this, ['https://greenflag-qa-experience.dev.mycro.app/login', 'qa@greenflag.com', 'Password1', 'User being successfully logged in', 'Successfully logged in!']);
    });

    it('User submits empty string', function () {
      loginWithCombinationOfValidAndInvalidUsernameAndPassword.apply(this, ['https://greenflag-qa-experience.dev.mycro.app/login', 'as empty string', 'as empty string', 'User cannot login', 'Warning message that valid username and password are needed']);
    });

    it('User submits valid username and invalid password', function () {
      loginWithCombinationOfValidAndInvalidUsernameAndPassword.apply(this, ['https://greenflag-qa-experience.dev.mycro.app/login', 'qa@greenflag.com', 'an invalid password', 'User cannot login', 'Warning message that valid username and password are needed']);
    });

    it('User submits invalid username and valid password', function () {
      loginWithCombinationOfValidAndInvalidUsernameAndPassword.apply(this, ['https://greenflag-qa-experience.dev.mycro.app/login', 'an invalid username', 'Password1', 'User cannot login', 'Warning message that valid username and password are needed']);
    });
  });
});
