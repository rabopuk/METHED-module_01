# MODULE_01
***
## git-config
### Действия после установки git
git config --list
git config --global user.name “имя”
git config --global user.email “почта”
git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global init.defaultBranch main # Ветка по умолчанию
### Windows
git config --global core.autocrlf true
### MAC & UNIX
git config --global core.autocrlf input

### Действия при инициализации нового репозитория и при работе с ним
#### инициализация git репозитория
git init
#### текущее состояние репозитория
git status
#### добавить в трек (отслеживаемые) файл или папку
git add index.html
#### добавить все файлы из корня в трек
git add .
#### выполнить коммит (сделать слепок) текущего состояния проекта
git commit -m "сообщение"
git log --oneline  посмотреть историю коммитов
#### показывает изменения
git diff
git diff --color-words # показывает по строкам изменения

### отменить коммит "ПЕРЕПИСЫВАЕТ ИСТОРИЮ"
#### вернуться к коммиту старому, но оставить текущие изменения
git reset 'HASH commit'
#### вернуться к коммиту и удалить все изменения
git reset --hard 'HASH commit'
#### откатить изменения у всех файлов трека
git checkout .
git checkout name.file # откатить изменения в одном файле или каталоге
#### откатить изменения в одном файле или каталоге
git checkout name.file
#### отправить изменения в удаленный репозиторий
git push
#### клонирование репозитория
git clone git@github.com:username/...
#### сохраняет изменения отслеживаемых файлов и выполняет коммит
git commit -a -m 'сохраняет изменения отслеживаемых файлов и выполняет коммит'

### Привязать репозиторий
#### Привязать локальный репозиторий к удалённому
git remote add origin git@github.com:username/...
#### Запушить изменения с локального на удалённый
git push -u origin main
***