import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/ours',{data:data.ours})
Mock.mock('/file',{data:data.file})
Mock.mock('/fire',{data:data.fire})