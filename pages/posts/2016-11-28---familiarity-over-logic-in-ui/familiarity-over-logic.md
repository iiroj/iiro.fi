---
title: "Familiarity over logic in UI"
date: "2016-11-28"
---

At Verkkokauppa.com we design and build almost all of our tools from the customer-facing website all the way to how we handle shippings to and from our warehouses.

I was recently tasked to redesign our web-based warehouse transfer tools; by _transfers_ I'm referring to a shipment of products from either manufacturers/wholesales to us, or between our own warehouses.

The old tools were built using old web technologies so redesigning them was straightforward: sortable columns, live-search, instant UI feedback, et cetera. One new feature our workers wanted was to allow PDA-operation of our internal transfers when receiving and unloading the products to their designated shelf locations (shelving logic is one of the only tools we have not built ourselves, but that is besides the point).

When someone from purchasing wants to sell one thousand units of an RCA splitter cable, they make a purchase order to a shipper who then ships the precious cargo to one of our warehouses. This is saved as a purchase order so our system knows how many cables were ordered. If the supplier has integrated into us, they will also send us back their manifests of how many cables the shipment should contain — these are typically the same number. When the shipment arrives we unload the products and inventorise them. This yields a third number: how many cables were actually delivered. If all these numbers match we have a solid system.

## The VER job

To ease this processing of all the incoming products we have PDA units (running on Windows Mobile no less) that allow us to assign running ids to shipping pallets and then inventorise the cable packages on these pallets individually by scanning both the id and product _EAN code_ using the PDA's barcode scanner. The process of doing this all is called a _VER job_ in our tools (I do not know but assume it stands for verification).

Due to the technical limitations of the PDA and the complexity of live operations on our warehouse stock records, we must manually create these VER jobs instead of the PDA automatically having knowledge of every incoming transfer. This has benefits, of course: one can assign multiple transfer orders to a single VER job and the PDA only displays unfinished jobs. A worker doesn't even need to care about these, since they can simply scan a pallet id and if it needs to be inventorised the PDA will show them what products should be on that pallet. Multiple workers can work on the same VER job and everything is updated live. We log everything so we can tell when and who checked in the last cable from the order. When this is done another group of people take the now-inventorised pallets and put the products onto their shelves.

----

When we want to transfer products between our own locations, including the stores and warehouses, things used to work differently. Because the product stock numbers do not increase from thin air like when ordering from the manufacturer, but instead they just move from another stock in our own system, we didn't have a similar method of inventorising using a PDA. When one wanted to move ten washing machines of the same make and model from storage to the store floor, they made an internal transfer and someone else marked it as _done_ once the products were physically moved. This sounds easy enough but once you need to restock multiple stores daily from a central warehouse, where the transfer order includes tens of different products, it gets more difficult.

Previously, on the receiving end one had to read the incoming transfer number into the old web UI using a barcode scanner, and after that our system instantly moved all the product stock between the locations. This has the additional effect of our system automatically filling the products into customer orders, and the customer get notified of this — even though the physical products might still be inside a truck! Somebody just scanned a barcode, that shouldn't happen yet.

To make this more reliable we wanted to follow the VER job process as closely as possible because that is what the workers are used to, although these scenarios work a bit differently from the point of view of our system. As I said earlier, because we move products between our own locations in the same system, we already know all the specific numbers. We only want to scan the incoming products in the receiving location and get a matching number. If these do not match, stuff has gone missing, broke or appeared by magic (maybe somebody misplaced it originally). We also do not need a _VER job_ because the transfer is already in the system. We simply need to make the PDA aware of the internal transfer so that the workflow, well, flows.

## Seamless translation between systems

At this point I want to give credit to our software engineers. Because the two transfer scenarios work differently they are also completely different systems-wise. The PDA devices are based on some ancient version of Windows Mobile and have a 3rd-party upgrade route with a six month delivery time. We needed to translate our internal transfers so that they appeared as normal purchase order VER jobs to the PDA. Getting the hang of this took some serious time. Me and the engineers spent a lot of time in the warehouse getting the feel of the workflows to even understand what the different numbers should mean. It's pretty difficult to debug the process of scanning barcodes without any products. It was also some two weeks into coding before we got a PDA working in our dev environment.

We worked using agile processes where we continuously deployed new code to production, did live tests with select warehouse employees and then iterated on it. Most of the UI work was done the same way — our experienced employees know how they need to work to be most effective, and quickly caught on the agile manifesto and kept themselves actively included.

## So what's the deal with this post's title?

I'm pretty close to a thousand words now but the title doesn't relate to this post at all. So here it comes: I strongly believe in logical user interfaces. A good UI must be intuitive and easily understandable. This means the language of the UI must describe itself as simply as possible. Creating a _VER  job_ isn't exactly intuitive to me. Especially in the case of our internal transfers, when what we actually do is just _show an existing transfer on the PDA_. This is why in the UI I had a button that said just that: _"Show on PDA"_. Someone first creates a transfer (be it an employee or our algorithms), then on the receiving location they make show it on the PDA, and finally scan away they go! Simple and intuitive.

Luckily our warehouse employees are better at user experience than me. Everyone knows that to inventorise a purchase order on the PDA you need to create a VER job. A new employee only needs to know the simple term VER, but they don't need to actually understand the entire process. This is why _showing an internal transfer order on the PDA_ was deemed too complicated for the UI description. My problem was that I understood the entire systems perspective, and so to me it was the logical and preferred way of describing the process.

We decided to jokingly call this new feature the _REV job_ (let's say that for for some far-stretched meaning it stands for 'review' instead of 'verification', and not just the reverse of VER). From the system's perspective there is no job and it's simply translating the internal transfer data to the UI logic of the PDA, but our workers do not need to care about that. When you just say "it's the same as VER job, but we call it REV for clarification", they take all of five minutes to get the hang of it and start scanning pallets.

__This way familiarity to pre-existing UI paradigms trumps otherwise logical descriptiveness, even if the former might not be the best way of describing a function.__

----

Please note that this was a heavily simplified description of our system and the internal transfer tool. I left out most of its features because they were not needed to get at least some hang of it, or to get my point across.