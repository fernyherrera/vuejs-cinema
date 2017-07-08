import Vue from 'vue';
import './style.scss';
import genres from './util/genres';

new Vue({
    el: '#app',
    data: {},
    components: {
        'movie-list': {
            template: `<div id="movie-list">
                            <div v-for="movie in movies" class="movie"> {{ movie.title }}</div>
                        </div>`,
            data() {
                return {
                    movies: [
                        {title: "Pulp Fiction"},
                        {title: "Home Alon"},
                        {title: "Austin Powers"}
                    ]
                }
            }
        },
        'movie-filter': {
            data () {
                return {
                    genres
                }
            },
            template: `<div id="movie-filter">
                            <h2>Movie filter</h2>
                            <div class="filter-group">
                                <check-filter v-for="genre in genres" v-bind:title="genre"></check-filter>
                            </div>
                        </div>`,
            components: {
                'check-filter': {
                    props: ['title'],
                    data() {
                        return {
                            checked: false
                        }
                    },
                    template: `<div v-bind:class="{ 'check-filter': true, active: checked } " v-on:click="checked = !checked">
                                    <span class="checkbox"></span>
                                    <span class="check-filter-title">{{title}}</span>
                                </div>`
                }
            }
        }
    }
});