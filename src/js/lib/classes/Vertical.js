import Point from "./Point.js"

/** класс описывающий конкретную вершину
 * с подключенному к ней DOM елементу
 */
export default class {
    /**
     * @param { HTMLDivElement } htmlElement - дом элемент связанный с точкой
     * @param { Point } point - конкретный объект точки
     */
    constructor(htmlElement = undefined, point = undefined){

        // проверка на заполнение полей
        if(htmlElement == undefined) throw new SyntaxError("Данные неполны: нет DOM елемента для привязки к вешине") 
        if(point == undefined) throw new SyntaxError("Данные неполны: нет точки для привязки к вешине") 

        
        this.DOMElement = htmlElement
        this.point = point
    }
}