const express = require('express');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

const app =  express();

const dbURI = 'mongodb+srv://mukeg:rgautham@gautham7.sjclk4a.mongodb.net/node-app?retryWrites=true&w=majority&appName=Gautham7';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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

app.get('/', (req, res) => {

    // const blogs = [
    //     {
    //         title: "Exploring the Beauty of the Swiss Alps",
    //         snippet: "Discover the breathtaking landscapes, charming villages, and thrilling outdoor activities that the Swiss Alps have to offer. From skiing in winter to hiking in summer, the Alps are a paradise for nature lovers and adventure seekers."
    //     },
    //     {
    //         title: "10 Tips for a Healthy and Balanced Diet",
    //         snippet: "Maintaining a healthy and balanced diet is essential for overall well-being. In this article, we provide 10 practical tips to help you make healthier food choices, including incorporating more fruits and vegetables, staying hydrated, and practicing mindful eating."
    //     },
    //     {
    //         title: "The Future of Technology: Trends to Watch in 2024",
    //         snippet: "Technology is evolving at a rapid pace, and 2024 is set to bring exciting advancements. From artificial intelligence and machine learning to blockchain and quantum computing, we explore the trends that are shaping the future of technology."
    //     },
    //     {
    //         title: "A Guide to Sustainable Travel",
    //         snippet: "Traveling sustainably is more important than ever. This guide offers tips on how to minimize your environmental impact while exploring new destinations, including choosing eco-friendly accommodations, supporting local businesses, and reducing waste."
    //     },
    //     {
    //         title: "Mindfulness Meditation: A Beginner's Guide",
    //         snippet: "Mindfulness meditation can help reduce stress and improve mental clarity. This beginner's guide covers the basics of mindfulness meditation, including techniques, benefits, and tips for incorporating it into your daily routine."
    //     }
    // ];
    

    // res.render('index', {title: 'Home', blogs});

    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About', companyName: 'BlogSpot'});
})

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title: '404 - Not found'});
})