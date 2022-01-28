import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectPage from './pages/SelectPage';
import { createGlobalStyle } from 'styled-components';
import { BG_COLOR } from './common/constants';

const StyledGlobal = createGlobalStyle`
  body { 
    margin: 0;
    background-color: ${BG_COLOR};
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <StyledGlobal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;