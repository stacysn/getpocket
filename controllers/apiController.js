function index(req,res) {
    res.json({
        message: 'Welcome to Pocket!',
        base_url: 'localhost:3000',
        endpoint: [
            {
            method: 'GET',
            path: '/api',
            description: 'shows all avaliable routes as JSON'
            }
        ]
    });
}

module.exports = {
  index: index
}
