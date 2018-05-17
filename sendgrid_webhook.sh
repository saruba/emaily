function localtunnel {
  lt -s saruba-eamily --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

# lt -p 5000 -s saruba-eamily.
