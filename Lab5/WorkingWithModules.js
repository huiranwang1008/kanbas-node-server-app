const module = {
    id: "CS101",
    name: "Introduction to Computer Science",
    description: "An overview of computer science fundamentals",
    course: "Computer Science",
  };
  
  export default function WorkingWithModules(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
  
    app.get("/lab5/module/name", (req, res) => {
      res.json(module.name);
    });
  
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName; 
      res.json(module); 
    });

    app.get("/lab5/module/description/:newDescription", (req, res) => {
      const { newDescription } = req.params;
      module.description = newDescription; 
      res.json(module); 
    });
 
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
      const { newScore } = req.params;
      assignment.score = parseInt(newScore); 
      res.json(assignment); 
    });

    app.get("/lab5/assignment/completed/:completed", (req, res) => {
      const { completed } = req.params;
      assignment.completed = completed === "true"; 
      res.json(assignment); 
    });
  }