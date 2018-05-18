module.exports = function (app, db) {
  app.use(function (req, res, next) {
    var allowedOrigins = ['http://localhost:4200']
    var origin = req.headers.origin
    if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', origin)
    }
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.header('Access-Control-Allow-Credentials', true)
    return next()
  })

  /*
    Create an employee
  */
  app.post('/api/employees/', function (req, res) {
    db.employee.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      thumbnail: req.body.thumbnail
    }).then(function (result) {
      res.json(result)
    })
  })

  /*
    Read all employees
  */
  app.get('/api/employees/', function (req, res) {
    db.employee.findAll({
      include: [db.salary]
    }).then(function (result) {
      res.json(result)
    })
  })

  /*
    Read employee by ID
  */
  app.get('/api/employees/:id', function (req, res) {
    db.employee.findById(req.params.id, {
      include: [db.salary, db.deduction, db.bonus]
    }).then(function (result) {
      res.json(result)
    })
  })

  /*
    Update employee by ID
  */
  app.put('/api/employees/:id', function (req, res) {
    db.employee.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      thumbnail: req.body.thumbnail
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (result) {
        db.employee.findById(req.params.id, {
          include: [db.salary, db.deduction, db.bonus]
        }).then(function (result) {
          res.json(result)
        })
      })
  })

  /*
    Destroy employee by ID
  */
  app.delete('/api/employees/:id', function (req, res) {
    db.employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result)
    })
  })

/*
  Create a salary
*/
  app.post('/api/salaries/', function (req, res) {
    db.salary.create({
      employee: req.body.employee,
      amount: req.body.amount,
      description: req.body.description
    }).then(function (result) {
      res.json(result)
    })
  })

  /*
    Read all Salaries
  */
  app.get('/api/salaries/', function (req, res) {
    db.employee.findAll({
      include: [db.salary]
    }).then(function (result) {
      res.json(result)
    })
  })

  /*
    Read salary by ID
  */
  app.get('/api/employees/:id', function (req, res) {
    db.employee.findById(req.params.id, {
      include: [db.salary]
    }).then(function (result) {
      res.json(result)
    })
  })

  /*
    Update salary by ID
  */
  app.put('/api/salaries/:id', function (req, res) {
    db.salary.update({
      amount: req.body.amount,
      description: req.body.description
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      db.salary.findById(req.params.id).then(function (result) {
        res.json(result)
      })
    })
  })

  /*
    Destroy salary by ID
  */
  app.delete('/api/salaries/:id', function (req, res) {
    db.salary.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result)
    })
  })




    //CRUD bonus

  /*
    Get all bonuses
  */
    app.get('/api/bonuses/', function (req, res) {
      db.bonus.findAll({
        include: [db.bonus]
      }).then(function (result) {
          res.json(result);
      });
  });


  /*
    Get bonus by ID
  */
  app.get('/api/bonuses/:id', function (req, res) {
      db.bonus.findById(req.params.id, {
        include: [db.bonus]
      }).then(function (result) {
          res.json(result);
      });
  });

  /*
    Create bonus by ID
  */
  app.post('/api/bonuses/', function (req, res) {
      db.bonus.create({
          employee: req.body.employee,
          amount: req.body.amount,
          description: req.body.description
      }).then(function (result){
          res.json(result);
      });

  });

  /*
    Update bonus by ID
  */
  app.put('/api/bonuses/:id', function (req, res) {
      db.bonus.update({
          employee: req.body.employee,
          amount: req.body.amount,
          description: req.body.description
      }, {
          where: {
              id: req.params.id
          }
      }).then(function (result) {
        db.bonus.findById(req.params.id).then(function (result) {
          res.json(result)
        })
      })
  });

  /*
    Destroy bonus by ID
  */
  app.delete('/api/bonuses/:id', function (req, res) {
      db.bonus.destroy({
          where: {
              id: req.params.id
          }
      }).then(function (result) {
          res.json(result);
      });
  });



  //CRUD deduction

  /*
    Get All deductions
  */
  app.get('/api/deductions/', function (req, res) {
      db.deduction.findAll({
        include: [db.deduction]
      }).then(function (result) {
          res.json(result);
      });
  });

  /*
    Get deduction by ID
  */
  app.get('/api/deductions/:id', function (req, res) {
      db.deduction.findById(req.params.id, {
        include: [db.deduction]
      }).then(function (result) {
          res.json(result);
      });
  });
  
  /*
    Create deduction by ID
  */
  app.post('/api/deductions/', function (req, res) {
      db.deduction.create({
          employee: req.body.employee,
          type: req.body.type,
          amount: req.body.amount,
          description: req.body.description
      }).then(function (result){
          res.json(result);
      });

  });

  /*
    Update deduction by ID
  */
  app.put('/api/deductions/:id', function (req, res) {
      db.deduction.update({
          employee: req.body.employee,
          type: req.body.type,
          amount: req.body.amount,
          description: req.body.description
      }, {
          where: {
              id: req.params.id
          }
      }).then(function (result) {
        db.deduction.findById(req.params.id).then(function (result) {
          res.json(result)
        })
      })
  });


  /*
    Destroy deduction by ID
  */
  app.delete('/api/deductions/:id', function (req, res) {
      db.deduction.destroy({
          where: {
              id: req.params.id
          }
      }).then(function (result) {
          res.json(result);
      });
  });
}
