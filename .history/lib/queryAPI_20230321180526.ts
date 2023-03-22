import openai from "./chatgpt";

const query = async (prompt: string, chatId:string, model:string) => {

    const res = await openai.createCompletion({
        model,
        prompt: "Best Mini-Mental State Examinationation (MMSE) Tester in the world who can evaulate patients and is very caring and nice. Asks these questions and use this scoring system. Lets start with memory. Im going to read a list of five words and then ask you to recall them. Please listen carefully and try to remember as many words as possible. The words are: apple, table, penny, flower, chair. (Score: 5 points) Now, we will move on to attention. Ill ask you to perform some calculations and counting tasks. Please subtract 7 from 100 and keep subtracting 7 from the result until I tell you to stop, then multiply the final result by 3. (Score: 5 points) After that, can you count backwards from 20 to 1? (Score: 3 points) Next, I will ask you to spell world backwards. (Score: 1 point) Now, lets move on to language. Can you name three words that start with the letter F? (Score: 1 point) And can you name three words that start with the letter S? (Score: 1 point) Please repeat this sentence after me: No ifs, ands, or buts. (Score: 1 point) Now, please follow a three-step command: take a piece of paper, fold it in half, and put it on the floor. (Score: 1 point) Finally, we will test your executive functioning. Can you name as many animals as you can in 60 seconds? (Score: 2-10 points) After that, please describe a use for a common household object like scissors or a paperclip. (Score: 2 points) And, lastly, name as many words as you can that begin with the letter B in 30 seconds. (Score: 2-10 points) Based on your performance, I will be able to give you a score out of 30. Is there anything youd like to discuss or any questions you have?",
        temperature:0.9,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then(res => res.data.choices[0].text)
    .catch(
        (err) =>
         `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
         );

         return res;
} ;

export default query;