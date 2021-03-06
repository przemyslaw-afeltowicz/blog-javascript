class Posts extends Component {
    constructor(controller) {
        super(controller);
    }

    render() {
        return `<div class="container"></div>`
    }

    addChildren() {
        let article = [];
        this.controller.model.each((item) => {
            let post = new Article(this.controller, item);
            article.push(post);
        });
        return article.reverse();
    }
}