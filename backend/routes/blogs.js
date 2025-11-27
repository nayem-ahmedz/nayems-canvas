const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

// POST /blogs - add a new blog
router.post('/', async (req, res) => {
  try {
    const { title, shortDesc, fullDesc, date, imageUrl, author, userId } = req.body;

    if (!title || !fullDesc || !author || !userId) {
      return res.status(400).json({ message: 'Title, Full Description, Author, and userId are required' });
    }

    const newBlog = new Blog({ title, shortDesc, fullDesc, date, imageUrl, author, userId });
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /blogs - list blogs (all if no userId, else user-specific)
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    let blogs;
    if (userId) {
      blogs = await Blog.find({ userId }).sort({ createdAt: -1 });
    } else {
      blogs = await Blog.find().sort({ createdAt: -1 }); // all blogs for public
    }
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /blogs/:id - get single blog
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /blogs/:id - delete a blog (only owner)
router.delete('/:id', async (req, res) => {
  try {
    const { userId } = req.query; // pass logged-in userId in query
    if (!userId) return res.status(400).json({ message: "userId required" });

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Compare ObjectId with string
    if (blog.userId.toString() !== userId) {
      return res.status(403).json({ message: 'You are not authorized to delete this blog' });
    }

    // Delete the blog
    await blog.deleteOne();

    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;