/**
 * @param {number} Vertax
 * @param {array} edges
 * @param {number} S (Source)
 * @return {array} dist
 */
const bellman_ford = (V, edges, S) => {
    const dist = new Array(V-1).fill(Number.MAX_SAFE_INTEGER);
    dist[S] = 0
    // why V-1 times because it will make sure each and every vertex is visited
    for(let ind=0; ind < V-1; ind++){
        for(let [u, v, w] of edges){
            if(dist[u] !==Number.MAX_SAFE_INTEGER &&
                dist[u] + w < dist[v]){
                dist[v] = dist[u] + w
            }
        }
    }
    // nth relaxation to check negative cycle
    for(let [u, v, w] of edges){
        if(dist[u] !==Number.MAX_SAFE_INTEGER &&
            dist[u] + w < dist[v]){
            return [-1]
        }
    }

    return dist
}