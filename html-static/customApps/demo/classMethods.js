            trayUpdate(trays)
            {
            }
            handleArchiveCardClick(clickData)
            {
                let projectionFilter =  
                {
                    projection:
                    {
                        _id                         :   0, 
                    } 
                };
                let queryFilter = 
                {
                    $and :
                    [
                        {
                            type: this.tray.type
                        },
                        {
                            name: this.tray.name
                        },
                        {
                            timeStamp :
                            {
                                $gte: clickData[0].timeStamp - 1,
                                $lte: clickData[0].timeStamp + 1
                            }
                        }
                    ] 
                    
                }
                this.app.sendActionMsg("customReadArchive","readDatabase",{queryFilter:queryFilter, projectionFilter:projectionFilter});
            }
            putCustomReadArchive(data)
            {
            }
            authorize()
            {
                if (this.authorizeButton.style.backgroundColor == "red")
                {
                    this.authorizeButton.style.backgroundColor = "yellow";
                }
                else
                {
                    this.authorizeButton.style.backgroundColor = "red";
                }
            }
