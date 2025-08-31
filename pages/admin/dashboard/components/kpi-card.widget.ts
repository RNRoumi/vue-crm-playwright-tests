// Total Earning / Order / Income

import {Page} from "@playwright/test";

export class KpiCardWidget {
    private page: Page
    constructor(page: Page) {
        this.page = page;
    }

    // Виджеты
    get totalEarningWidget() {return this.page.locator('.v-card.v-theme--PurpleTheme.v-card--density-default.elevation-0.rounded-md.v-card--variant-elevated.bg-secondary.overflow-hidden.bubble-shape.bubble-secondary-shape')}
    get totalOrderWidget() {return this.page.locator('.v-card.v-theme--PurpleTheme.v-card--density-default.elevation-0.rounded-md.v-card--variant-elevated.bg-primary.overflow-hidden.bubble-shape.bubble-primary-shape')}
    get totalIncomeWidget(){return this.page.locator('.v-col-md-4.v-col-12').nth(1)}

    // Тайтлы виджетов
    get totalEarningWidgetTitle () { return this.totalEarningWidget.getByText('Total Earning') }
    get totalOrderWidgetTitle () { return this.totalOrderWidget.getByText('Total Order')}
    get totalIncomeWidgetTitle () { return this.totalIncomeWidget.getByText('Total Income')}

    // Суммы в виджетах
    get totalEarningWidgetAmount () {return this.totalEarningWidget.locator('.v-card-text .text-h1.font-weight-medium')}
    get totalOrderWidgetAmount () {return this.totalOrderWidget.locator('.v-card-text .text-h1.font-weight-medium')}
    get totalIncomeWidgetAmount () {return this.totalIncomeWidget.locator('v-card-text.pa-5 text-h4.font-weight-medium')}

    //Кнопки в виджетах

}

