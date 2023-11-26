import Post from "./post.js";
import PostService from "./post-service.js";

class PostController {
  async create(req, res) {
    try {
      const {author, title, content, picture} = req.body
      const post = await PostService.create({author, title, content, picture}, req.files.picture)

      res.status(200).json(post)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async getOne(req, res) {
    try {
      const {id} = req.params
      const post = await PostService.getOne(id)

      return res.json(post)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async update(req, res) {
    try {
      const post = req.body
      const updatedPost = await PostService.update(post)

      return res.json(updatedPost)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const {id} = req.params

      const post = await PostService.delete(id)
      if (!post) res.status(400).json({message: 'post doesnt found'})
      return res.json(post)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
}

export default new PostController();