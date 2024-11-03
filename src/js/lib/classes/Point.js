/** Класс описывающий абстрактную точку */
export default class {
    /**
     * @param { Array } connected - Подсоединенные вершины 
     * @param { Boolean } state - Состояние точки 
     */
    constructor(connected = [], state = false) {
        this.connected = connected
        this.state = state
    }
}