                let inLineTable = document.createElement("table");
                this.cardBodyDiv.appendChild(inLineTable);
                inLineTable.setAttribute("width", "100%");

                let inLineRow  = document.createElement("tr");
                inLineTable.appendChild(inLineRow);

                let widgetColumn = document.createElement("td");
                inLineRow.appendChild(widgetColumn);
                widgetColumn.style.width = "100%";
			    widgetColumn.style.align = "center";
			    widgetColumn.style.textAlign = "center";
			    widgetColumn.style.fontSize= "150%";
                widgetColumn.style.paddingTop = "20px";
                widgetColumn.style.paddingBottom = "20px";
                widgetColumn.style.paddingLeft = "20%";
                widgetColumn.style.paddingRight = "20%";

                this.authorizeButton = document.createElement('button');
                widgetColumn.appendChild(this.authorizeButton);
                this.authorizeButton.classList.add("btn");
                this.authorizeButton.classList.add("btn-block");
                this.authorizeButton.style.fontSize = "100%";
                this.authorizeButton.style.color = "black";
                this.authorizeButton.style.backgroundColor = "red";
                this.authorizeButton.style.paddingTop = "20px";
                this.authorizeButton.style.paddingBottom = "20px";
                this.authorizeButton.innerHTML = 'Authorize';
                this.authorizeButton.onclick = event => {this.authorize()};
                this.authorizeButton.disabled = false;
                this.authorizeButtonPushed = false;
