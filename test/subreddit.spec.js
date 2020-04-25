const sinon = require("sinon");
const request = require("request");
const chai = require("chai");
const should = chai.should();
const subreddits = require("./fixtures/subreddits.json");

const responseObject = {
  statusCode: 200,
  headers: {
    "content-type": "application/json",
  },
};

describe("when stubbed", () => {
  beforeEach(() => {
    this.get = sinon.stub(request, "get");
  });
  afterEach(() => {
    request.get.restore();
  });
  describe("Testing the GET API /api/v1/subreddits/:subreddit", () => {
    it("should return all subreddit", (done) => {
      this.get.yields(null, responseObject, JSON.stringify(subreddits));
      request.get(`/api/v1/subreddits/test`, (err, res, body) => {
        // there should be a 200 status code
        res.statusCode.should.eql(200);
        res.headers["content-type"].should.contain("application/json");
        done();
      });
    });
  });
});
