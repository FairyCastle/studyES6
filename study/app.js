import { uniq } from 'lodash';
import moment from 'moment';
import apikey from './config'

const arr = [1,2,3,3,3,3,65656,98,45,5]

console.log(uniq(arr));