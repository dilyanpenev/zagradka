import React from 'react';

const HelpView = () => {
    return (
        <div className="help-view">
            <h3>Инструкции</h3>
            <p>Целта на играта е да познаете града в България с възможно най-малко опити. Всеки ден загадката е различен град. За да познаете верния отговор, имате
                на разположение по 5 характеристики за всеки град:</p>
            <ul>
                <li>Регион</li>
                <li>Област</li>
                <li>Население</li>
                <li>Дали градът има Ж.П. гара</li>
                <li>Надморска височина</li>
            </ul>
            <p>В зависимост от характеристиките на правилния град, всяко едно от 5-те квадратчета на вашето предположение ще се оцвети според близостта му до верния отговор:</p>
            <ul>
                <li><span className='red'>червено</span> - грешно (далеч си от истината)</li>
                <li><span className='yellow'>жълто</span> - почти вярно (близо си до верния отговор)</li>
                <li><span className='green'>зелено</span> - напълно вярно (позна!)</li>
            </ul>
            <h4>Успех и приятна игра!</h4>
        </div>
    );
}

export default HelpView;
