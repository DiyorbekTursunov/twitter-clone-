import axios from "./api";

const ArticleServise = {
    async getArticle(){
        const {data} = await axios.get("articles")
        return data
    }
}
export default ArticleServise