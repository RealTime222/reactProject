namespace ComboSample
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            List<City> cities = new List<City>();
            cities.Add(new City { Code = 1, Name = "Abc", Population = 100000 });
            cities.Add(new City { Code = 2, Name = "Tel Aviv" });
            comboBox1.DataSource = cities;
            comboBox1.ValueMember = "Code";
            comboBox1.DisplayMember = "Name";

        }

        private void button1_Click(object sender, EventArgs e)
        {

        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            City selectedCity = (City)comboBox1.SelectedItem;
            string cityname = selectedCity.Name;
            int cityCode = selectedCity.Code;
            int population = selectedCity.Population;

        }
    }

    public class City
    {
        public int Code { get; set; }
        public string Name { get; set; }
        public int Population { get; set; }
    }

}