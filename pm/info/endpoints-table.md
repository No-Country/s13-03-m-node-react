**USERS**
`/api/v1/users/`

<table>
    <thead>
        <tr>
            <th>Ruta</th>
            <th>Método</th>
            <th>Explicación</th>
            <th>Recibe</th>
            <th>Devuelve</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>/</td>
            <td>POST</td>
            <td>El usuario envía el email y su password para poder recibir un token con el que hará peticiones en base a su ID</td>
            <td><code>email</code> <br/><code>password</code></td>
            <td>
            <pre>
{
    "message": "Correct credentials",
    "token": "nnnnnn"
}</pre>
            </td>
            <td>200</td>
        </tr>
        <tr>
            <td>login</td>
            <td>POST</td>
            <td>El usuario envía el email y su password para poder recibir un token con el que hará peticiones en base a su ID</td>
            <td><code>email</code> <br/><code>password</code></td>
            <td>
            <pre>
{
    "message": "Correct credentials",
    "token": "nnnnnn"
}</pre>
            </td>
            <td>200</td>
        </tr>
        <tr>
            <td>login</td>
            <td>POST</td>
            <td>El usuario envía el email y su password para poder recibir un token con el que hará peticiones en base a su ID</td>
            <td><code>email</code> <br/><code>password</code></td>
            <td>
            <pre>
{
    "message": "Correct credentials",
    "token": "nnnnnn"
}</pre>
            </td>
            <td>200</td>
        </tr>
    </tbody>
</table>

