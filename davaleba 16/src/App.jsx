import "./App.css";
import axios from 'axios'
import {
  Link,
  NavLink,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
  useParams,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  ListGroup,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { WikiLinks } from "./WikiLinks";

const response = await axios("http://localhost:3000/")
const entries = response.data


const RootLayout = () => {
  const navigate = useNavigate();

  const searchEntry = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    event.target.reset();

    // navigate({
    //   pathname: "/wiki/search",
    //   search: createSearchParams({ q: formData.get("q") }).toString(),
    // });

    navigate(`/wiki/search?q=${formData.get("q")}`);
  };

  return (
    <Container fluid className="py-2">
      <Row>
        <Col md={3} className="border-end">
          <header>
            <h1>Wiki</h1>
            <Form onSubmit={searchEntry}>
              <InputGroup className="mb-2">
                <FormControl
                  placeholder="Query"
                  name="q"
                  type="search"
                  autoComplete="off"
                />
              </InputGroup>
            </Form>
            <nav>
              <ListGroup>
                <ListGroup.Item>
                  <NavLink to="/">Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    to={`/wiki/${
                      entries[Math.floor(Math.random() * entries.length)].title
                    }`}
                  >
                    Random entry
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    to={`/wiki/new`}
                  >
                    create new wiki
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </nav>
          </header>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <main>
            <Outlet />
          </main>
        </Col>
      </Row>
    </Container>
  );
};

const WikiHome = () => {
  useEffect(() => {
    document.title = "Home | Wiki";
  }, []);

  return (
    <div>
      <h2>Available entries</h2>
      <WikiLinks entries={entries} />
    </div>
  );
};

const WikiTopic = () => {
  const { topic } = useParams();

  useEffect(() => {
    document.title = `${topic} | Wiki`;
  }, [topic]);

  const topicObject = entries.find((entry) => entry.title === topic);

  if (!topicObject) {
    return (
      <div>
        <h3>Topic not found: {topic}</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>{topicObject.title}</h2>
      <p>{topicObject.content}</p>
    </div>
  );
};

const WikiSearchResults = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.title = `Search results | Wiki`;
  }, [searchParams]);

  let searchEntries = entries;
  if (searchParams.get("q")) {
    searchEntries = entries.filter((entry) =>
      entry.title.toLowerCase().includes(searchParams.get("q").toLowerCase()),
    );
  }

  return (
    <div>
      <h2>Search results</h2>
      {searchEntries.length > 0 ? (
        <WikiLinks entries={searchEntries} />
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

const NotFound = () => {
  return <h2>Page not found</h2>;
};

const New = () => {
  const [text,newtext] = useState('')
  const [title,newtitle] = useState('')

  const newpost = {
    title:{title},
    content:{text}
  }

  const Text = (event) => {
    event.preventDefault();
    newtext(event.target.value)
  }

  const Title = (event) => {
    event.preventDefault();
    newtitle(event.target.value)
  }

  const post = async () => {
    const response = await axios.post(
      "http://localhost:3000/",
      newpost
    )
    
  }
  return (
    
    <>
    <Form onSubmit={Title}>
      <InputGroup className="mb-2">
        <FormControl
          placeholder="Title"
          name="title"
          type='search'
          autoComplete="off" />
      </InputGroup>
    </Form>
    <Form onSubmit={Text}>
       <textarea name="text" id="" cols="100" rows="10" placeholder="Text">

       </textarea>
    </Form>
      </>
    
  )
};


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<WikiHome />} />
        <Route path="wiki/:topic" element={<WikiTopic />} />
        <Route path="wiki/search" element={<WikiSearchResults />} />
        <Route path="*" element={<NotFound />} />
        <Route path="wiki/new" element={<New />} />
      </Route>,
    ),
  );

  return <> <RouterProvider router={router}/></>;

}

export default App;




