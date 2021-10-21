const taskBuilder = require("../controllers/taskController");
module.exports = app => {
    app
        .route('/tasks')
        .get(taskBuilder.list_all)
        .post(taskBuilder.create_task);

    // app
        // .route('/tasks/:id')
        // .get(taskBuilder.read_a_task)
        // .get(taskBuilder.update_a_task)
        // .delete(taskBuilder.delete_a_task)
}