const Bull = require("bull");
const mailer = require("nodemailer");

const send = (request, response) => {
  const bullQueue = new BullEmailQueue();
  bullQueue.producer();
  response.send("Request Completed.");
};

class BullEmailQueue {
  constructor() {
    this.instance = new Bull("sendEmailQueue", {
      redis: {
        host: "127.0.0.1",
        port: "6379",
      },
    });
  }
  producer() {
    this.instance.add(
      { toEmail: "harshitchandani144@gmail.com" },
      {
        attempts: 2,
      }
    );
    this.consumer();
  }

  consumer() {
    const sendEmail = async (toEmail) => {
      // Ethereal is a fake STMP mail service.
      const transporter = mailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "giovanna68@ethereal.email",
          pass: "MV3GzJNF6Z6x7Sr4B2",
        },
      });
      await transporter
        .sendMail({
          from: "toEmail",
          to: "harshitchandani144@gmail.com",
          subject: "nodeMailer code testing.",
          text: "testing of code. using bull and nodemailer.",
          priority: "high",
        })
        .then((info) => {
          console.log(info);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    this.instance.process(async (job) => {
      await sendEmail(job.data.toEmail);
    });
  }
}

// const producer = function () {
//   const imageProcessingQueue = new Bull("processing-image");
//   console.log(imageProcessingQueue);
//   console.log("About to enqueue 2 jobs");

//   (async function () {
//     const job1 = await imageProcessingQueue.add(
//       { imageURL: "https://picsum.photos/1920/1080" },
//       { delay: 2000 }
//     );

//     const job2 = await imageProcessingQueue.add({
//       imageURL: "https://picsum.photos/200/200",
//     });
//   })();
//   consumer();
// };

// const longRunningFunction = (imageURL) => {
//   console.log(`I am a long running function ${imageURL}`);
// };

// const consumer = function () {
//   const imageProcessingQueue = new Bull("processing-image");

//   imageProcessingQueue.process(async function (job) {
//     console.log("job.id", job.id, "job.data", job.data);

//     longRunningFunction(job.data.imageURL);

//     return { imageURL: job.data.imageURL, result: "OK" };
//   });
//   listener();
// };

// const listener = function () {
//   const imageProcessingQueue = new Bull("processing-image");

//   imageProcessingQueue.on("global:completed", (job, result) => {
//     console.log("Job Completed: ", job, "Result: ", result);
//   });
// };

// const bullQueueProducer = () => {
//   const queue = new Bull("sendEmailQueue", {
//     redis: {
//       host: "127.0.0.1",
//       port: "6379",
//     },
//   });

//   queue.add(
//     { toEmail: "harshitchandani144@gmail.com" },
//     {
//       attempts: 2,
//     }
//   );
// };

module.exports = {
  sendEmail: send,
};
