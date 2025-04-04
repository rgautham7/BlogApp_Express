require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const blogRoutes = require('./routes/blogRoutes');

const app =  express();
const dbURI = process.env.MONGODB_KEY;
const port = process.env.PORT || 3000;

// EJS Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About', companyName: 'BlogSpot'});
});

app.use('/blogs', blogRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', {title: '404 - Not found'});
});

// Connect to MongoDB and start server
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}))
.catch(err => {
    console.error('MongoDB connection error:', err);
});

module.exports = app;

// Mongoose and Mongo routers interactions

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'My new blog 2',
//         snippet: 'About my new blog',
//         body: 'Lots of random words'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => console.log(err));  
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/single', (req, res) => {
//     Blog.findById('6684d28b8994a9a784e57d04')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });