import { mockARequest, mockAResponse } from "../../../test/mockRequestBody";
import sequelize from "../../db";
import { createAPost } from "../feed";
import { createAPoll } from "./createAPoll";

const okPollRequest = {
  "content": "Who is the best football player?",
  "type": "poll",
  "userId": 1,
  "options": [
    {"text": "Messi"},
    {"text": "CR7"},
    {"text": "Neymar"}
  ]
}

describe('postAPoll', () => {

  it('the main function: createAPost should call another function: createAPoll to actially post the pollOptions: ', async () => {

    const mockRequest = mockARequest(okPollRequest)

    const mockResponse = mockAResponse();

    await createAPost(mockRequest, mockResponse);

  });


});
