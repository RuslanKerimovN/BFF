echo "Starting...."
echo "Start express...."
(cd express && npm start) &
echo "Start proxy...."
(cd proxy && npm start) &
echo "Start frontend...."
(cd frontend && npm run dev) &
wait
