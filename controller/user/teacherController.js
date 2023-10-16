const teacherService = require("../../service/teacherService");
const userService = require("../../service/userService");
const userController = require("./userController");
const courseController = require("./courseController");

module.exports = {
  getTeacher: async (req, res) => {
    const data = await teacherService.getTeacher();
    res.send(data);
  },
  createTeacher: async (req, res) => {
    const { firstname, lastname, email, phoneNumber, coursename, courseCreditHours, ...Teacher } = req.body;
    // console.log({
    //   firstname: fistname,
    //   lastname: lastname,
    //   email: email,
    //   phoneNumber: phoneNumber,
    // });
    const creteUser = await userController.createUserhelper({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phoneNumber: phoneNumber,
    });
    const creteCourse = await courseController.createCoursehelper({
        
        coursename: coursename,
        courseCreditHours: courseCreditHours,
      });
    const createTeacher = await teacherService.createTeacher({
      userId: creteUser.id,
      scale: Teacher.scale,
      department: Teacher.department,
    });

    res.send(createTeacher);
  },
};
