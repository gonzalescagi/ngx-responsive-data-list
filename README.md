# NgxResponiveDataList

El componente `ngx-responsive-data-list` es una herramienta para Angular que permite mostrar contenido de forma adaptativa según el tamaño de la pantalla. Es ideal para mostrar datos tabulares en dispositivos móviles de manera más compacta y legible.

## Instalación

npm install ngx-responsive-data-list

## Uso
El componente ngx-responsive-data-list se utiliza de la siguiente manera:

<ngx-responsive-data-list [base]="base" [dataList]="data" [config]="{ type: 'clasic' }">
    <ng-template #content let-datos>
        <!-- Aquí va el contenido principal -->
    </ng-template>

    <ng-template #action let-datos>
        <!-- Aquí van las acciones adicionales -->
    </ng-template>

    <ng-template #extra let-datos>
        <!-- Aquí va el contenido extra opcional -->
    </ng-template>
</ngx-responsive-data-list>

## Entradas
+ [base]: Fragmento HTML base, por ejemplo, una tabla.
+ [dataList]: Array de datos a mostrar.
+ [config]: Configuración del tipo de visualización (type: 'clasic' | 'modern' | 'future' | 'list' | 'city';).

### Templates
+ #content: Plantilla para el contenido principal.
+ #action: Plantilla para acciones adicionales.
+ #extra: Plantilla opcional para contenido extra desplegable.

### Requisitos
+ Angular 17
+ Angular Material instalado

### Ejemplo
<ngx-responsive-data-list [base]="base" [dataList]="data" [config]="{ type: 'clasic' }">
    <ng-template #content let-datos>
        <div>
            <!-- Contenido libre para la lista -->
        </div>
    </ng-template>

    <ng-template #action let-datos>
        <button (click)="editItem(datos)">Editar</button>
        <button (click)="deleteItem(datos)">Eliminar</button>
    </ng-template>

    <ng-template #extra let-datos>
        <!-- Contenido extra desplegable -->
    </ng-template>
</ngx-responsive-data-list>

## Contribución
¡Contribuciones son bienvenidas! Si deseas contribuir al proyecto, por favor revisa nuestra guía de contribución y sigue los lineamientos.

## Contacto
Si tienes preguntas, sugerencias o problemas, por favor contacta al equipo de desarrollo en gonzalescagi@gmail.com o abre un issue en el repositorio.

## Licencia
Este proyecto está bajo la Licencia Apache-2.0 license. Consulta el archivo LICENSE para más detalles.

