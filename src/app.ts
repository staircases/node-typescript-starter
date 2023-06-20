import express, { Express, Request, Response } from 'express'
import environment from './environment'

const app: Express = express()
const appPort = environment.APP_PORT
