# neoView

NeoView is a project to visualize NEO transcations from 2D and 3D angle, which you could grasp the overview of the network without confused by UTXO links.

## Architecture

FrontEnd - Visualize NEO address in 2D and 3D

BackEnd - Collect block & transaction data from mainnet

Analysize - Parse data to 2D heatmap & 3D locations(using Multi-dimensional Scaling)

## TODO

Better Data collecting & processing, eg redis accelerating

Using Hillbert Curve + Tile loading to accelerating 2D heatmap visualization. And make it true

Better 3D structure and effect

Special thanks to Dorahacks, NEO and my undergraduate final thesis guide teacher.

## A few tips

1. `http-server` on `npm` is handy tool to test files in `neoViewFront/asset`

