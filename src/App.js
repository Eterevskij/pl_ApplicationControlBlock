import 'antd/dist/antd.css';
import './App.css';
import ApplicationControlItem from './components/ApplicationControlItem';

const data = {
  id: '3243243',
  firstDate: '12.05.2022',
  secondDate: '12.05.2022',
  warningText: 'Заполните всю недостающую информацию по объявлению чтобы его опубликовать',
  link: 'https://helpfulpeople/asdasdasd32132/12321dad3/34123112',
  rejectionReasonText:
    'Мой клиент неожиданно передумал продавать квартиру. Причина возникновения: конструкционный отказ, вызванный недостатками и неудачной конструкцией объекта; производственный отказ, связанный с ошибками при изготовлении объекта по причине несовершенства или нарушения технологии; эксплуатационный отказ, вызванный нарушением правил эксплуатации.',
  users: [
    {
      id: '492932320',
      role: 'client',
      name: { first: 'Гущин', middle: 'Данил', last: 'Андреевич' },
      contacts: [
        { type: 'email', text: 'bestmail241230@mail.ru' },
        { type: 'phone', text: '+7 (960) 468-40-73' },
      ],
    },
    // {
    //   role: 'buyer',
    //   name: { first: 'Спиридонов', middle: 'Габриел', last: 'Петрович' },
    //   contacts: [
    //     { type: 'email', text: 'bestmail241230@mail.ru' },
    //     { type: 'phone', text: '+7 (960) 468-40-73' },
    //   ],
    // },
  ],
};

function App() {
  return (
    <div className="App">
      <ApplicationControlItem type="unsuccessfullyCompleted" data={data} />
    </div>
  );
}

export default App;
