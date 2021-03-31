# Squelize Project

_Uso de sequelize_

## Pasos:

* Instalar dependencias:
```
npm install
```

* Crear el archivo db.sqlite3 en la raíz del proyecto.

* Aplicar la migración
```
npx sequelize db:migrate
```

* Ejecutar el seed
```
npx sequelize db:seed:all
```

## Ejemplo de uso

* Create:
```
node . --create:Contact --firstname=Maria --lastname=Parra --phone=22222222 email=maria@example.com
```

* Read:
```
node . --read:Contact
```

* Update:
```
node . --update:Contact --id=3 --phone=3333333
```

* Delete:
```
node . --delete:Contact --id=3
```