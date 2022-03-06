const express = require ('express');
const Experience = require('./models/expreince');
const serviceschema = require('./models/serviceschema');
const Skills = require('./models/skills');
const Education= require('./models/education');
const photos = require('./models/userModuls');
const preworks  = require('./models/preworkschema');


var formidable = require('formidable');
var fs = require('fs');
const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));
const server = express();
const bodyParser = require("body-parser");
server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use(bodyParser.json());
server.set('views','view');
server.use(express.json());
const  mongoose = require('mongoose');
server.use(express.urlencoded({extended: false}));


 mongoose.connect ('mongodb://localhost:/portfolio',
 ()=>console.log('database connected successfully'),
 e => console.error(e));

server.get(['/','/index','/home'],async(req,res)=>{

    const skillsData = await Skills.find();

    res.render('index',{skills:skillsData});
  

});



server.get('/login',async(req,res)=>{

    res.render('login');

});


//------------------------  Update Skill--------------------//

server.get( '/edit-skill/:id' ,(req,res)=>{
    console.log(req.params.id)
    Skills.findById(req.params.id,(err,data)=>{
        
        res.render('edit-skill',{skill: data});
    })
    
});

server.post( '/edit-skill/save' ,(req,res)=>{
    var form = new formidable.IncomingForm();
   

    Skills.findByIdAndUpdate(req.body.id,
        {skillName: req.body.skillName
            ,skillRange:req.body.skillRange},
            {returnDocument:'after'},()=>{})

            res.redirect('/dashboard');
    
});

//  Delete Skill By ID For Skill//
server.get( '/delete-skill/:id' ,(req,res)=>{

    Skills.findByIdAndUpdate(req.params.id,{state:0},()=>{
        
        res.redirect('/dashboard');
    })
    
});

server.get( '/delete-services/:id' ,(req,res)=>{

    serviceschema.findByIdAndUpdate(req.params.id,{state:0},()=>{
        
        res.redirect('/dashboard');
    })
    
});

server.get( '/delete-exper/:id' ,(req,res)=>{

    Experience.findByIdAndUpdate(req.params.id,{state:0},()=>{
        
        res.redirect('/dashboard');
    })
    
});
//  Delete Skill By ID For Services//



//------------------------------------------------------------------------//
//------------------------  Update Educatiion--------------------//

server.get( '/edait-education/:id' ,(req,res)=>{
    console.log(req.params.id)
    Education.findById(req.params.id,(err,data)=>{
        
        res.render('edait-education',{edu: data});
    })
    
});

server.post( '/edait-education/save' ,(req,res)=>{
    var form = new formidable.IncomingForm();
   
    Education.findByIdAndUpdate(req.body.id,
        {Ledu: req.body.Ledu
            ,gedu:req.body.gedu,
            cedu:req.body.cedu},
            {returnDocument:'after'},()=>{})

            res.redirect('/dashboard');
    
});
//------------------------------------------------------------------------//


//------------------------  Update Experiance--------------------//
server.get( '/edait-exper/:id' ,(req,res)=>{
    console.log(req.params.id)
    Experience.findById(req.params.id,(err,data)=>{
        
        res.render('edait-exper',{exp: data});
    })
    
});


server.post( '/edait-exper/save' ,(req,res)=>{
    var form = new formidable.IncomingForm();

    Experience.findByIdAndUpdate(req.body._id,
        {expName: req.body.expName
            ,companyName:req.body.companyName,
            expDesc:req.body.expDesc},
            {returnDocument:'after'},()=>{})

            res.redirect('/dashboard');
        });       


//-------------------------Delete From Db-------------------------------------------------------------------//

// server.get( '/delete-exper/:id' ,(req,res)=>{
//     console.log(req.params.id)
//     Experience.findByIdAndRemove(req.params.id,()=>{
        
//         res.redirect('/dashboard');
//     })
    
// });



//--------------------------------------------------------------------------------------------------//
//------------------------  Update Services--------------------//
server.get( '/edait-services/:id' ,(req,res)=>{
    console.log(req.params.id)
    serviceschema.findById(req.params.id,(err,data)=>{
        
        res.render('edait-services',{serv: data});
    })
    
});


server.post( '/edait-services/save' ,(req,res)=>{
    var form = new formidable.IncomingForm();

    serviceschema.findByIdAndUpdate(req.body._id,
        {servName: req.body.servName
           ,
            servDesc:req.body.servDesc},
            {returnDocument:'after'},()=>{})

            res.redirect('/dashboard');
        });       


//--------------------------------------------------------------------------------------------//







server.get( '/edit-skill' ,(req,res)=>{
    res.render('edit-skill',);
});


//--------insert Data---------------//
server.get( '/dashboard' ,(req,res)=>{

    Experience.find({},(expErr,expData)=>{
        if(expErr) return;
        Skills.find({},(skillErr,skillData)=>{
            if(skillErr) return;
            photos.find({},(photosErr,photosData)=>{
                if(photosErr) return;
                Education.find({},(eduErr,eduData)=>{
                    if(eduErr) return;
                    preworks.find({},(prewwErr,prewwData)=>{
                        if(prewwErr) return;
                        serviceschema.find({},(servErr,servData)=>{
                            if(servErr) return;
    
                 
                
                        serviceschema.find({},(servErr,servData)=>{
                            res.render('dashboard',{ exp : expData , skill : skillData , photo: photosData[0] , edu :eduData , preww : prewwData  , serv:servData} );
    })
})
})
})
})
})
})
});

server.get( '/add-skill' ,(req,res)=>{
    res.render('add-skill');
});


server.get( '/personal-Edait' ,(req,res)=>{

    res.render('personal-Edait');
});


server.get( '/add-education' ,(req,res)=>{
    res.render('add-education');
});

server.get( '/edait-education' ,(req,res)=>{
    res.render('edait-education');
});


server.get( '/add-prework' ,(req,res)=>{
    res.render('add-prework');
});

server.get( '/add-exper' ,(req,res)=>{
    res.render('add-exper');
});
server.get( '/add-services' ,(req,res)=>{
    res.render('add-services');
});
//-----------------------Display on Dashboard------------------------------------------------//
server.post( '/add-skill' ,(req,res)=>{
   
    Skills.create(req.body);
    res.write(`
    <script>
    alert('Added Successfully ');
    window.location.href = "/dashboard";
    </script>
    `)

});



server.post( '/add-exper' ,(req,res)=>{
    Experience.create(req.body);
    res.write(`
    <script>
    alert('Added Successfully ');
    window.location.href = "/dashboard";
    </script>
    `)
});



server.post( '/add-services' ,(req,res)=>{
    serviceschema.create(req.body);
    res.write(`
    <script>
    alert('Added Successfully ');
    window.location.href = "/dashboard";
    </script>
    `)
});

server.post( '/add-prework' ,(req,res)=>{

  
    preworks.create(req.body);
     res.write(`
     <script>
     alert('Added Successfully ');
     window.location.href = "/dashboard";
     </script>
     `)
 });


server.post( '/add-education' ,(req,res)=>{

    // console.log(req.body);
    Education.create(req.body);
     res.write(`
     <script>
     alert('Added Successfully ');
     window.location.href = "/dashboard";
     </script>
     `)
 });



server.get( '/edait-exper' ,(req,res)=>{
    res.render('edait-exper');
});

server.get( '/edait-services' ,(req,res)=>{
    res.render('edait-services');
});

server.get( '/dashboard' ,(req,res)=>{
    res.render('dashboard');
});





//-------------Edait -Image----------------------//
server.post('/personal-Edait', (req, res) => {

    var form = new formidable.IncomingForm();
   
    console.log(req.body)

    form.parse(req, function(err, fields, files) {
      

        if (files) {

            var Image = getFileInfo(files.image, '\\public\\uploads\\images\\');
            var CV = getFileInfo(files.cv, '\\public\\uploads\\cv\\');

            fs.rename(Image.oldPath, Image.newPath, () => {});
            fs.rename(CV.oldPath, CV.newPath, () => {});
        }
        photos.updateMany({},{
          image: Image.name,
            cv: CV.name
        },{returnDoucmen:'after'},()=>{});
        res.redirect('/dashboard');
    });

});

function getFileInfo(file, destination) {
    var extention = file.originalFilename.split(".").pop();
    var fileName = Date.now() + "-" + (Math.random() * 1e20) + "." + extention;
    var oldPath = file.filepath;
    var newPath = __dirname + destination + fileName;

    return {
        extention: extention,
        name: fileName,
        oldPath: oldPath,
        newPath: newPath
    }
}

















const port= process.env.port || 4000;

server.listen(port, console.log(`Server started on port ${port}`));
