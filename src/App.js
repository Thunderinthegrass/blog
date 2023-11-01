import "./App.scss";
import { Header } from "./components/Header/Header";
import { BlogContent } from "./components/BlogContent/BlogContent";
import { Footer } from "./components/Footer/Footer";

export function App(props) {
  // console.log(props)
  return (
    <div className="App">
      <Header />
      <main>
        <BlogContent postsAmount={props.postsAmount} posts={props.posts} />
      </main>
      <Footer />
    </div>
  );
}
