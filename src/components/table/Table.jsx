import React from "react";
import style from "./table.module.css";

const Table = ({ product }) => {

  if (product.categoriesId === "laptop") {
    return (
    <table className={style.description_table}>
      <thead>
        <tr>
          <th colSpan="2">Характеристика - {product.name}</th>
        </tr>
      </thead>
      <tbody>
        <tbody>
          <tr>
            <td>Серия</td>
            <td>{product?.description?.series || "Не указано"}</td>
          </tr>
          <tr>
            <td>Диагональ экрана</td>
            <td>{product?.description?.screen?.diagonal || "Не указано"}</td>
          </tr>
          <tr>
            <td>Частота обновления</td>
            <td>{product?.description?.screen?.refreshRate || "Не указано"}</td>
          </tr>
          <tr>
            <td>Тип экрана</td>
            <td>{product?.description?.screen?.type || "Не указано"}</td>
          </tr>
          <tr>
            <td>Разрешение экрана</td>
            <td>{product?.description?.screen?.resolution || "Не указано"}</td>
          </tr>
          <tr>
            <td>Покрытие экрана</td>
            <td>{product?.description?.screen?.coating || "Не указано"}</td>
          </tr>
          <tr>
            <td>Процессор</td>
            <td>{product?.description?.processor?.type || "Не указано"}</td>
          </tr>
          <tr>
            <td>Операционная система</td>
            <td>
              {product?.description?.processor?.operatingSystem || "Не указано"}
            </td>
          </tr>
          <tr>
            <td>Оперативная память</td>
            <td>{product?.description?.ram?.size || "Не указано"}</td>
          </tr>
          <tr>
            <td>Тип хранилища</td>
            <td>{product?.description?.storage?.type || "Не указано"}</td>
          </tr>
          <tr>
            <td>Емкость хранилища</td>
            <td>{product?.description?.storage?.capacity || "Не указано"}</td>
          </tr>
          <tr>
            <td>М2 слоты</td>
            <td>{product?.description?.storage?.m2Slots || "Не указано"}</td>
          </tr>
          <tr>
            <td>SATA слоты</td>
            <td>{product?.description?.storage?.sataSlots || "Не указано"}</td>
          </tr>
          <tr>
            <td>Графика</td>
            <td>
              {product?.description?.graphics?.manufacturer || "Не указано"} -{" "}
              {product?.description?.graphics?.type || "Не указано"}
            </td>
          </tr>
          <tr>
            <td>Ёмкость аккумулятора</td>
            <td>
              {product?.description?.case?.batteryCapacity || "Не указано"}
            </td>
          </tr>
          <tr>
            <td>Вес</td>
            <td>{product?.description?.case?.weight || "Не указано"}</td>
          </tr>
          <tr>
            <td>Аккумулятор</td>
            <td>
              {product?.description?.case?.batteryFeatures || "Не указано"}
            </td>
          </tr>
          <tr>
            <td>Размеры</td>
            <td>{product?.description?.case?.dimensions || "Не указано"}</td>
          </tr>
          <tr>
            <td>Wi-Fi</td>
            <td>{product?.description?.connectivity?.wifi || "Не указано"}</td>
          </tr>
          <tr>
            <td>Bluetooth</td>
            <td>
              {product?.description?.connectivity?.bluetooth || "Не указано"}
            </td>
          </tr>
          <tr>
            <td>Порты</td>
            <td>
              {product?.description?.ports?.thunderbolt || "Не указано"}|
              {product?.description?.ports?.audioJack || "Не указано"}
            </td>
          </tr>
          <tr>
            <td>Дополнительные особенности</td>
            <td>
              {Array.isArray(product?.description?.additionalFeatures)
                ? product.description.additionalFeatures.join(", ")
                : "Не указано"}
            </td>
          </tr>
          <tr>
            <td>Страна производства</td>
            <td>{product?.description?.countryOfOrigin || "Не указано"}</td>
          </tr>
          <tr>
            <td>Гарантия</td>
            <td>{product?.description?.warranty || "Не указано"}</td>
          </tr>
          <tr>
            <td>Модельный год</td>
            <td>{product?.description?.modelYear || "Не указано"}</td>
          </tr>
          <tr>
            <td>Класс</td>
            <td>{product?.description?.class || "Не указано"}</td>
          </tr>
          <tr>
            <td>Тип</td>
            <td>{product?.description?.type || "Не указано"}</td>
          </tr>
          <tr>
            <td>Дополнительные опции</td>
            <td>
              {Array.isArray(product?.description?.extraOptions)
                ? product.description.extraOptions.join(", ")
                : "Не указано"}
            </td>
          </tr>
          <tr>
            <td>Содержимое упаковки</td>
            <td>
              {Array.isArray(product?.description?.packageContents)
                ? product.description.packageContents.join(", ")
                : "Не указано"}
            </td>
          </tr>
        </tbody>
      </tbody>
    </table>)
  }

  if (product.categoriesId === "phone"){
    return (
        <table className={style.description_table}>
        <thead>
          <tr>
            <th colSpan="2">Характеристики {product.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Серия</td>
            <td>{product.description.series}</td>
          </tr>
          <tr>
            <td>Экран</td>
            <td>
              Диагональ: {product?.description?.screen?.diagonal}, 
              Частота обновления: {product?.description?.screen?.refreshRate}, 
              Тип: {product.description.screen?.type}, 
              Разрешение: {product?.description?.screen?.resolution}, 
              Покрытие: {product?.description?.screen?.coating}
            </td>
          </tr>
          <tr>
            <td>Процессор</td>
            <td>{product?.description?.processor?.type}</td>
          </tr>
          <tr>
            <td>Операционная система</td>
            <td>{product?.description?.processor?.operatingSystem}</td>
          </tr>
          <tr>
            <td>Оперативная память</td>
            <td>{product?.description?.ram?.size}</td>
          </tr>
          <tr>
            <td>Хранение</td>
            <td>Тип: {product?.description?.storage?.type}, Вместимость: {product?.description?.storage?.capacity}</td>
          </tr>
          <tr>
            <td>Камеры</td>
            <td>
              Основная: {product?.description?.camera?.main}, 
              Широкоугольная: {product?.description?.camera?.ultraWide}, 
              Телеобъектив: {product?.description?.camera?.telephoto}, 
              Фронтальная: {product?.description?.camera?.front}, 
              Дополнительные функции: {product?.description?.camera?.additionalFeatures?.join(', ')}
            </td>
          </tr>
          <tr>
            <td>Батарея</td>
            <td>
              Емкость: {product.description.battery.capacity}, 
              Зарядка: {product.description.battery.charging}, 
              Время работы: {product.description.battery.batteryLife}
            </td>
          </tr>
          <tr>
            <td>Подключение</td>
            <td>
              Wi-Fi: {product.description.connectivity.wifi}, 
              Bluetooth: {product.description.connectivity.bluetooth}, 
              Сигнал: {product.description.connectivity.signal}
            </td>
          </tr>
          <tr>
            <td>Порты</td>
            <td>
              USB: {product.description.ports.usb}, 
              Аудио разъем: {product.description.ports.audioJack}
            </td>
          </tr>
          <tr>
            <td>Дополнительные особенности</td>
            <td>{product.description.additionalFeatures.join(', ')}</td>
          </tr>
          <tr>
            <td>Страна производства</td>
            <td>{product.description.countryOfOrigin}</td>
          </tr>
          <tr>
            <td>Гарантия</td>
            <td>{product.description.warranty}</td>
          </tr>
        </tbody>
      </table>
    )
  }

  if (product.categoriesId === "headphones"){
    return (
        <table className={style.description_table}>
          <thead>
            <tr>
              <th colSpan="2">Характеристика - {product.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Тип</td>
              <td>{product?.description?.type || "Не указано"}</td>
            </tr>
            <tr>
              <td>Подключение</td>
              <td>{product?.description?.connectivity || "Не указано"}</td>
            </tr>
            <tr>
              <td>Звук</td>
              <td>
                Драйверы: {product?.description?.sound?.drivers || "Не указано"}, 
                Частотный диапазон: {product?.description?.sound?.frequencyResponse || "Не указано"}, 
                Импеданс: {product?.description?.sound?.impedance || "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Микрофон</td>
              <td>{product?.description?.microphone || "Не указано"}</td>
            </tr>
            <tr>
              <td>Управление</td>
              <td>
                {Array.isArray(product?.description?.controls)
                  ? product.description.controls.join(", ")
                  : "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Батарея</td>
              <td>
                Наушники: {product?.description?.battery?.earbuds || "Не указано"}, 
                Зарядный кейс: {product?.description?.battery?.chargingCase || "Не указано"}, 
                Зарядка: {product?.description?.battery?.charging || "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Дополнительные особенности</td>
              <td>
                {Array.isArray(product?.description?.additionalFeatures)
                  ? product.description.additionalFeatures.join(", ")
                  : "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Совместимость</td>
              <td>{product?.description?.compatibility || "Не указано"}</td>
            </tr>
            <tr>
              <td>Гарантия</td>
              <td>{product?.description?.warranty || "Не указано"}</td>
            </tr>
            <tr>
              <td>Страна производства</td>
              <td>{product?.description?.countryOfOrigin || "Не указано"}</td>
            </tr>
          </tbody>
        </table>
      );
  }

  if (product.categoriesId === "tablet"){
    return (
        <table className={style.description_table}>
          <thead>
            <tr>
              <th colSpan="2">Характеристика - {product.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Серия</td>
              <td>{product?.description?.series || "Не указано"}</td>
            </tr>
            <tr>
              <td>Дисплей</td>
              <td>
                Размер: {product?.description?.display?.size || "Не указано"}, 
                Разрешение: {product?.description?.display?.resolution || "Не указано"}, 
                Тип: {product?.description?.display?.type || "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Процессор</td>
              <td>{product?.description?.processor?.type || "Не указано"}</td>
            </tr>
            <tr>
              <td>Операционная система</td>
              <td>{product?.description?.processor?.operatingSystem || "Не указано"}</td>
            </tr>
            <tr>
              <td>Хранилище</td>
              <td>
                Вместимость: {product?.description?.storage?.capacity || "Не указано"}, 
                Расширяемое: {product?.description?.storage?.expandable || "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Камера</td>
              <td>
                Задняя: {product?.description?.camera?.rear || "Не указано"}, 
                Фронтальная: {product?.description?.camera?.front || "Не указано"}, 
                Особенности:{" "}
                {Array.isArray(product?.description?.camera?.features)
                  ? product?.description?.camera?.features.join(", ")
                  : "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Подключение</td>
              <td>
                Wi-Fi: {product?.description?.connectivity?.wifi || "Не указано"}, 
                Bluetooth: {product?.description?.connectivity?.bluetooth || "Не указано"}, 
                LTE: {product?.description?.connectivity?.signal || "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Порты</td>
              <td>
                USB: {product?.description?.ports?.usb || "Не указано"}, 
                Аудио разъем: {product?.description?.ports?.audioJack || "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Батарея</td>
              <td>
                Емкость: {product?.description?.battery?.capacity || "Не указано"}, 
                Особенности: {product?.description?.battery?.features || "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Дополнительные особенности</td>
              <td>
                {Array.isArray(product?.description?.additionalFeatures)
                  ? product.description.additionalFeatures.join(", ")
                  : "Не указано"}
              </td>
            </tr>
            <tr>
              <td>Страна производства</td>
              <td>{product?.description?.countryOfOrigin || "Не указано"}</td>
            </tr>
            <tr>
              <td>Гарантия</td>
              <td>{product?.description?.warranty || "Не указано"}</td>
            </tr>
          </tbody>
        </table>
      );
    
  }

};

export default Table;

