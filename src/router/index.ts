import {createRouter, createWebHistory} from 'vue-router'
import HomeFooter from "@/components/Footers/HomeFooter.vue";
import ResultsFooter from "@/components/Footers/ResultsFooter.vue";
import type {TRouteMeta} from "@/types/routeMeta";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
            meta: <TRouteMeta>{
                footer: HomeFooter
            }
        }, {
            path: '/iq-test',
            name: 'iq-test',
            component: () => import('@/views/IQTestView.vue'),
            meta: <TRouteMeta>{
                headerText: 'Тест на определение IQ',
                headerSize: 'sm'
            }
        }, {
            path: '/iq-test/results',
            name: 'results',
            component: () => import('@/views/TestResultsView.vue'),
            meta: <TRouteMeta>{
                headerText: 'Готово!',
                headerSize: 'lg',
                footer: ResultsFooter
            },
            beforeEnter: (to, from, next) => {
                const testCommittedAt = localStorage.getItem('iq-test');

                if (testCommittedAt && new Date(+testCommittedAt).getTime() > new Date().getTime() - (10 * 60 * 1000)) {
                    next()
                } else {
                    next({name: 'home'})
                }
            }
        }
    ]
})

export default router
