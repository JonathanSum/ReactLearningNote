import React from 'react';
import ReactDOM from 'react-dom';
class VacancySign extends React.Component{

  render() {
    var text;
if(this.props.hasvacancy){
    text ='Vacancy'
}else{
  text ='No Vacancy'
}

return (
  <div>{text}</div>
)}}

ReactDOM.render(
  <VacancySign hasvacancy={false} />,
  document.body
);
