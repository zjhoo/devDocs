rm -r ./pui_doc
mv ./dist ./pui_doc

scp -r  ./pui_doc hyzh@172.18.5.251:/var/www/html/

# ssh hyzh@172.18.5.251
# sudo systemctl restart nginx
# exit