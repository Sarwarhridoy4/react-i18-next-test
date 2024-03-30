import { useTranslation } from 'react-i18next';
import './App.css'

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <h2>{t('Welcome to React')}</h2>
    </div>
  );
};

export default App;
