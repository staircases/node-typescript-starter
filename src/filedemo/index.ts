import * as fs from 'fs'

export function blocking(file: string) {
    console.log('before read sync')
    const data = fs.readFileSync(file)
    console.log('after read sync', data.toString())
    console.log('end')
}

export function nonBlocking(file: string) {
    console.log('before read async')
    fs.readFile(file, (err, data) => {
        if (err) {
            console.error('error reading file', err)
            return
        }
        console.log('message', data.toString())
    })
    console.log('after read async')
    console.log('end')
}
