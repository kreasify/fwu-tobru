# Feuerwehr Urdorf Website

Dieses Repository beinhaltet die Website der Feuerwehr Urdorf unter https://www.feuerwehrurdorf.ch.
Die Website ist mit [Hugo](https://gohugo.io/) erstellt und benutzt [Tailwind CSS](https://tailwindcss.com/) für Styling.

## Wo finde ich was?

Es gibt viele Ordner in diesem Projekt, die wichtigsten für den Alltag sind:

* News: `content/news`
* Seiten: `content/page` und `content/pages`
* Fahrzeuge: `content/vehicles`
* Homepage Banner: `data/home.yaml`

## Web CMS

Unter https://www.feuerwehrurdorf.ch/admin ist das Web CMS für ein einfaches editieren von News erreichbar.
Aktuell ist dies noch nicht vollständig verfügbar.

## Bilder Grössen

Damit die Fotos gut aussehen, sollten sie mind. 1900px breit sein. Hugo erstellt die passenden Grössen beim Build automatisch.

* Homepage Hero Desktop: 1900 x 839 px
* Homepage Hero Mobile: TODO
* News Card: 420 x 280 px
* News Header: TODO

## Hosting

Die Website ist aktuell auf dem Webserver von Tobias Brunner gehostet.
Bei jeder Änderung wird die Webseite automatisch neu gebaut und auf den Server gepusht.

Konkret: Eine CI/CD Pipeline (zu finden unter `.forgejo`) erstellt ein Docker Image bei jedem Push ins Repository und deployt dieses anschliessend auf einen Kubernetes Cluster.

## Einsätze

Einsätze müssen nicht von Hand erfasst werden.
Dies erledigt ein Tool automatisch, siehe [lodurthing](https://git.tbrnt.ch/feuerwehrurdorf/lodurthing).

## Website lokal starten

1. Das Git Repository klonen
2. Dependencies installieren: `npm install`
3. Hugo starten: `hugo server`
