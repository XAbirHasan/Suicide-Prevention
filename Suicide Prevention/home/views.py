from django.shortcuts import render, resolve_url

# Create your views here.

# index page
def indexPage(request):
    return render(request, 'index.html')

# about page
def aboutPage(request):
    return render(request, 'about.html')

# result page
def resultPage(request):
    reason_list = get_updated_reason()
    method_list = get_method_list()
    division_list, barisal_list, chattagram_list, dhaka_list, khulna_list, mymensingh_list, rajshahi_list, ranpur_list, sylhet_list = get_area_lists()
    profession_group_list = get_profession_group()
    religion_group_list = get_religion_group()

    #NEW Added ones
    gender_list = get_gender_group()
    age_list = get_age_group()
    time_list = get_time_group()
    month_list = get_month_group()
    weather_list = get_weather_group()
    economic_list = get_economic_group()

    test_data_list =  get_data_list()

    # cluseter data
    the_cluster = get_the_cluster_list()

    # comprison data
    reason_vs_age = get_reason_vs_age_group()
    reason_vs_gender = get_reason_vs_gender()
    method_vs_gender = get_method_vs_gender()
    economic_vs_age = get_economic_vs_age()

    
    # return all the values get from padas
    return render(request,  'result.html', {'reason_list': reason_list, 'method_list':method_list, 'division_list':division_list,
                            'barisal_list':barisal_list, 'chattagram_list':chattagram_list, 'dhaka_list':dhaka_list, 'khulna_list':khulna_list, 'mymensingh_list':mymensingh_list,
                            'rajshahi_list':rajshahi_list, 'ranpur_list':ranpur_list, 'sylhet_list':sylhet_list, 'profession_group_list': profession_group_list,
                            'religion_group_list':religion_group_list, 'gender_list':gender_list, 'age_list':age_list, 'time_list':time_list, 'month_list':month_list,
                            'weather_list':weather_list, 'economic_list':economic_list, 'test_data_list':test_data_list, 'the_cluster':the_cluster,
                            'reason_vs_age':reason_vs_age, 'reason_vs_gender':reason_vs_gender, 'method_vs_gender':method_vs_gender, 'economic_vs_age':economic_vs_age})

# dataset page
def datasetPage(request):
    return render(request, 'dataset.html')

# api page
def apiPage(request):
    return render(request, 'api.html')

# test page
def testPage(request):
    return render(request, 'test.html')

# team page
def teamPage(request):
    return render(request, 'team.html')

# contact page
def contactPage(request):
    return render(request, 'contact.html')




#######################################################################################################################################
# all ML and load data part is here

## all imports
import pandas as pd

## load data here globally ++++++++++++++++++++++++++++++++++++
input_path = 'home/data_set/data_v2.csv'
df = pd.read_csv(input_path)
# print(len(df))

## Prepare text ++++++++++++++++++++++++
def listToString(s): 
    str1 = " " 
    return (str1.join(s))

## make list format according with the javascript graph ++++++++++++++++++++++++++++++++++++++++++++
def make_list_format(reason, count_reason):
    # make proper format ++++++++++++++++++++++++++
    the_list = []
    l = ["Number of cases", "Suicide cases", { "role": "style" }]
    the_list.append(l)

    res_bar_color = "#2F76EA"
    max_color = "#e32d20"

    size = len(count_reason)
    max = count_reason[0]
    for i in range (0, size):
        l = []
        l.append(reason[i])
        l.append(count_reason[i])
        l.append(res_bar_color)
        the_list.append(l)
        # set new max value
        if max < count_reason[i]:
            max = count_reason[i]
    
    # set the max bar to its color
    for i in range (1, size+1):
        if the_list[i][1] == max:
            the_list[i][2] = max_color
    # print(the_list)
    return the_list

  
# get results of reason ++++++++++++++++++++++++++++++++++
def get_reason_list():
    gk = df.groupby(['reason']).size().reset_index(name='count')

    # print(gk)

    ## fixing data values
    reason = ['addiction', 'domestic violence', 'fails', 'false accusation', 'family issue', 'mental & physical issue', 'poverty']
    count_reason = [0]*len(reason)
    count = 0
    for i in range(0, len(gk)):
        count += gk['count'][i]
        if gk['reason'][i] == "addiction":
            count_reason[0] += gk['count'][i]

        if gk['reason'][i] in ["domestic violance", "domestic violence", "rape", "violance", "violence", "voilence", "violence ans mental issue"]:
            count_reason[1] += gk['count'][i]

        if gk['reason'][i] in ["fails", "fail"]:
            count_reason[2] += gk['count'][i]
        
        if gk['reason'][i] in [ "false accusation", "harassment", "humilliation"]:
            count_reason[3] += gk['count'][i]

        if gk['reason'][i] in ["family issue", "family issue or relationship problem", "marital affair", "marital affairs", "relatiohship problem", "relationship problem"]:
            count_reason[4] += gk['count'][i]

        if gk['reason'][i] in ["mental issue", "physical issue", "psysical issue"]:
            count_reason[5] += gk['count'][i]

        if gk['reason'][i] == "poverty":
            count_reason[6] += gk['count'][i]
        
    # print(count_reason)

    # make proper format and return
    return make_list_format(reason, count_reason)
        
# get results of methods ++++++++++++++++++++++++++++++++++
def get_method_list():
    method_group = df.groupby(['method']).size().reset_index(name='count')
    method_list = []
    method_count_list = []
    for i in range(0, len(method_group)):
        method_list.append(method_group['method'][i])
        method_count_list.append(method_group['count'][i])
    
    file_path = "home/data_set/fix/method data fix.csv"
    df_fix_method = pd.read_csv(file_path)

    # intilize the data dictionry
    method_map = {}
    the_method = []
    the_group = []
    for i in range(0, len(df_fix_method)):
        the_method.append(df_fix_method['Method'][i])
        the_group.append(df_fix_method['Group'][i])
        method_map[df_fix_method['Group'][i]] = 0
    
    # update the value and add to the dictinary
    for i in range(0, len(method_list)):
        if method_list[i] in the_method:
            index = the_method.index(method_list[i])
            group = the_group[index]
            method_map[group] += method_count_list[i]

    # make proper format and return
    return make_list_format(list(method_map.keys()), list(method_map.values()))

# get results of area:division and districts ++++++++++++++++++++++++++++++++++
def get_area_lists():
    area_group = df.groupby(['hometown']).size().reset_index(name='count')

    area_list = []
    count_list = []
    for i in range(0, len(area_group)):
        area_list.append(area_group['hometown'][i])
        count_list.append(area_group['count'][i])
    
    file_path = 'home/data_set/fix/area data fix.csv'
    df_fix_data_area = pd.read_csv(file_path)

    # make division group
    division_group = df_fix_data_area.groupby(['division']).size().reset_index(name='count')
    # make distict group
    distict_group = df_fix_data_area.groupby(['district']).size().reset_index(name='count')

    division_map = {"Barisal" :0,
                "Chattagram" :0,
                "Dhaka" :0,
                "Khulna" :0,
                "Mymensingh" :0,
                "Rajshahi" :0,
                "Rangpur" :0,
                "Sylhet" :0}

    the_area = []
    the_district = []
    the_division = []
    for i in range(0, len(df_fix_data_area)):
        the_area.append(df_fix_data_area['Area'][i])
        the_district.append(df_fix_data_area['district'][i])
        the_division.append(df_fix_data_area['division'][i])

    
    # initilize all data dictionary
    distict_map_barisal = {}
    distict_map_chattagram = {}
    distict_map_dhaka = {}
    distict_map_khulna = {}
    distict_map_mymensingh = {}
    distict_map_rajshahi = {}
    distict_map_rangpur = {}
    distict_map_sylhet = {}
    for i in range(0, len(the_district)):
        if the_division[i] == "Barisal":
            distict_map_barisal[the_district[i]] = 0

        if the_division[i] == "Chattagram":
            distict_map_chattagram[the_district[i]] = 0
        
        if the_division[i] == "Dhaka":
            distict_map_dhaka[the_district[i]] = 0
        
        if the_division[i] == "Khulna":
            distict_map_khulna[the_district[i]] = 0
        
        if the_division[i] == "Mymensingh":
            distict_map_mymensingh[the_district[i]] = 0
        
        if the_division[i] == "Rajshahi":
            distict_map_rajshahi[the_district[i]] = 0
        
        if the_division[i] == "Rangpur":
            distict_map_rangpur[the_district[i]] = 0
        
        if the_division[i] == "Sylhet":
            distict_map_sylhet[the_district[i]] = 0
    
    # update all data dictionaries
    for i in range(0, len(area_list)):
        if area_list[i] in the_area:
            index = the_area.index(area_list[i])
            district = the_district[index]
            division = the_division[index]
            division_map[division] += count_list[i]

            if division == "Barisal":
                distict_map_barisal[district] += count_list[i]

            elif division == "Chattagram":
                distict_map_chattagram[district] += count_list[i]
            
            elif division == "Dhaka":
                distict_map_dhaka[district] += count_list[i]
            
            elif division == "Khulna":
                distict_map_khulna[district] += count_list[i]
            
            elif division == "Mymensingh":
                distict_map_mymensingh[district] += count_list[i]
            
            elif division == "Rajshahi":
                distict_map_rajshahi[district] += count_list[i]
            
            elif division == "Rangpur":
                distict_map_rangpur[district] += count_list[i]
            
            elif division == "Sylhet":
                distict_map_sylhet[district] += count_list[i]
    
    # make proper format and return the data
    the_division_list = make_list_format(list(division_map.keys()), list(division_map.values()))
    # all district
    the_barisal_list = make_list_format(list(distict_map_barisal.keys()), list(distict_map_barisal.values()))
    the_chattagram_list = make_list_format(list(distict_map_chattagram.keys()), list(distict_map_chattagram.values()))
    the_dhaka_list = make_list_format(list(distict_map_dhaka.keys()), list(distict_map_dhaka.values()))
    the_khulna_list = make_list_format(list(distict_map_khulna.keys()), list(distict_map_khulna.values()))
    the_mymensingh_list = make_list_format(list(distict_map_mymensingh.keys()), list(distict_map_mymensingh.values()))
    the_rajshahi_list = make_list_format(list(distict_map_rajshahi.keys()), list(distict_map_rajshahi.values()))
    the_ranpur_list = make_list_format(list(distict_map_rangpur.keys()), list(distict_map_rangpur.values()))
    the_sylhet_list = make_list_format(list(distict_map_sylhet.keys()), list(distict_map_sylhet.values()))

    return the_division_list, the_barisal_list, the_chattagram_list, the_dhaka_list, the_khulna_list, the_mymensingh_list, the_rajshahi_list, the_ranpur_list, the_sylhet_list


# get results of profession group ++++++++++++++++++++++++++++++++++
def get_profession_group():
    area_profession_group = df.groupby(['profession_group']).size().reset_index(name='count')

    # initilize the data dictionaries
    profession_group = {}
    for i in range(0, len(area_profession_group)):
        if area_profession_group['profession_group'][i] in ['actor', 'musician', 'saint']:
            profession_group['actor'] = 0

        if area_profession_group['profession_group'][i] == 'businessman':
            profession_group['businessman'] = 0
        
        if area_profession_group['profession_group'][i] in ['day laborer', 'day labourer', 'day-laborer', 'worker']:
            profession_group['day labourer'] = 0
        
        if area_profession_group['profession_group'][i] == 'farmer':
            profession_group['farmer'] = 0

        if area_profession_group['profession_group'][i] in ['housewife', 'houswife']:
            profession_group['housewife'] = 0

        if area_profession_group['profession_group'][i] in ['doctor', 'engineer', 'gambler', 'service holder']:
            profession_group['service holder'] = 0
        
        if area_profession_group['profession_group'][i] in ['spotsman', 'stportsman']:
            profession_group['athlete'] = 0
        
        if area_profession_group['profession_group'][i] == 'student':
            profession_group['student'] = 0
        
        if area_profession_group['profession_group'][i] == 'teacher':
            profession_group['teacher'] = 0
        
    # update the the data dictionaries
    for i in range(0, len(area_profession_group)):
        if area_profession_group['profession_group'][i] in ['actor', 'musician', 'saint']:
            profession_group['actor'] += area_profession_group['count'][i]

        if area_profession_group['profession_group'][i] == 'businessman':
            profession_group['businessman'] += area_profession_group['count'][i]
        
        if area_profession_group['profession_group'][i] in ['day laborer', 'day labourer', 'day-laborer', 'worker']:
            profession_group['day labourer'] += area_profession_group['count'][i]
        
        if area_profession_group['profession_group'][i] == 'farmer':
            profession_group['farmer'] += area_profession_group['count'][i]

        if area_profession_group['profession_group'][i] in ['housewife', 'houswife']:
            profession_group['housewife'] += area_profession_group['count'][i]

        if area_profession_group['profession_group'][i] in ['doctor', 'engineer', 'gambler', 'service holder']:
            profession_group['service holder'] += area_profession_group['count'][i]
        
        if area_profession_group['profession_group'][i] in ['spotsman', 'stportsman']:
            profession_group['athlete'] += area_profession_group['count'][i]
        
        if area_profession_group['profession_group'][i] == 'student':
            profession_group['student'] += area_profession_group['count'][i]
        
        if area_profession_group['profession_group'][i] == 'teacher':
            profession_group['teacher'] += area_profession_group['count'][i]

    # make proper format and return the data
    return make_list_format(list(profession_group.keys()), list(profession_group.values()))

# get results of religion group ++++++++++++++++++++++++++++++++++
def get_religion_group():
    area_religion = df.groupby(['religion']).size().reset_index(name='count')
    # make proper format and return the data
    return make_list_format(area_religion['religion'][:], area_religion['count'][:])


# NEW ADDED ======================================================
# get results of gender group ++++++++++++++++++++++++++++++++++
def get_gender_group():
    area_gender = df.groupby(['gender']).size().reset_index(name='count')
    # make proper format and return the data
    return make_list_format(area_gender['gender'][:], area_gender['count'][:])

# get results of time group ++++++++++++++++++++++++++++++++++
def get_time_group():
    area_time = df.groupby(['time']).size().reset_index(name='count')

    # fix time group
    the_list = ['morning', 'noon', 'afternoon', 'evening', 'night']
    the_count = [0]*len(the_list)

    size = len(area_time)
    for i in range(0, size):
        if area_time['time'][i] in ['Morning' ,'moring' ,'morning']:
            the_count[0] += area_time['count'][i]
        
        if area_time['time'][i] == 'noon':
            the_count[1] += area_time['count'][i]
        
        if area_time['time'][i] == 'afternoon':
            the_count[2] += area_time['count'][i]
        
        if area_time['time'][i] == 'evening':
            the_count[3] += area_time['count'][i]
        
        if area_time['time'][i] in ['night' ,'niight']:
            the_count[4] += area_time['count'][i]

    # make proper format and return the data
    return make_list_format(the_list, the_count)


# get results of date of month group ++++++++++++++++++++++++++++++++++
def get_month_group():
    l = len(df)
    all_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
    month_list = []
    # get the date and split the month
    for i in range(0, l):
        the_date = df['suicide_date'][i].split("/")
        # print(the_date, len(the_date), "\tid : ", i)
        month_list.append(all_month[int(the_date[1])-1])
    # print(month_list)
    month_map = {'month':month_list}
    month = pd.DataFrame.from_dict(month_map)
    month.head()
    
    # make proper group data
    area_suicide_date = month.groupby(['month']).size().reset_index(name='count')

    # make proper format and return the data
    return make_list_format(area_suicide_date['month'][:], area_suicide_date['count'][:])

# get results of age group ++++++++++++++++++++++++++++++++++
def get_age_group():
    area_age_gorup = df.groupby(['age_gorup']).size().reset_index(name='count')
    the_list = ['Teen', 'Youth', 'Middle-aged', 'Adult', 'Old']
    the_count = [0]*len(the_list)

    size = len(area_age_gorup)
    for i in range(0, size):
        if area_age_gorup['age_gorup'][i] == 'teen':
            the_count[0] += area_age_gorup['count'][i]
        
        if area_age_gorup['age_gorup'][i] in ['yougth' ,'youth']:
            the_count[1] += area_age_gorup['count'][i]
        
        if area_age_gorup['age_gorup'][i] in ['middle-aged' ,'middled-aged']:
            the_count[2] += area_age_gorup['count'][i]
        
        if area_age_gorup['age_gorup'][i] == 'adult':
            the_count[3] += area_age_gorup['count'][i]
        
        if area_age_gorup['age_gorup'][i] in ['.' ,'old']:
            the_count[4] += area_age_gorup['count'][i]
    # make proper format and return the data
    return make_list_format(the_list, the_count)

# get results of weather group ++++++++++++++++++++++++++++++++++
def get_weather_group():
    # weather_main
    area_weather_gorup = df.groupby(['weather_main']).size().reset_index(name='count')
    # make proper format and return the data
    return make_list_format(area_weather_gorup['weather_main'][:], area_weather_gorup['count'][:])


# get results of economic group ++++++++++++++++++++++++++++++++++
def get_economic_group():
    # weather_main
    economic_gorup = df.groupby(['economic_condition']).size().reset_index(name='count')

    # fix data
    the_list = ['upper class', 'upper middle class', 'middle class', 'lower middle class', 'lower class']
    the_count = [0]*len(the_list)

    size = len(economic_gorup)
    for i in range(0, size):
        if economic_gorup['economic_condition'][i] in ['Upper Class', 'upper class']:
            the_count[0] += economic_gorup['count'][i]
        
        if economic_gorup['economic_condition'][i] in ['Upper Middle Class', 'Upper middle class', 'upper middle class']:
            the_count[1] += economic_gorup['count'][i]
        
        if economic_gorup['economic_condition'][i] in ['middle class', 'middle  class',' Middle class', 'Middle Class', 'MIddle class']:
            the_count[2] += economic_gorup['count'][i]
        
        if economic_gorup['economic_condition'][i] == 'lower middle class':
            the_count[3] += economic_gorup['count'][i]
        
        if economic_gorup['economic_condition'][i] in ['lower class', 'Lower-Middle Class', 'Lower middle class', 'Lower Middle Class']:
            the_count[4] += economic_gorup['count'][i]

    # make proper format and return the data
    return make_list_format(the_list, the_count)


def get_data_list():
    the_list = []
    l = ['Genre', 'love affair', 'money', 'parent anger', 'exam' , 'dippression', 'smoke', 'heroin', 'rooftop', 'fan', 'iron rod'] #lop
    l.append({ 'role': 'annotation' })

    the_list.append((l))
    l = ['family issue', 5, 10, 15, 0, 0, 0, 0, 0, 0, 0, ''] #lop
    the_list.append((l))

    l = ['fails', 0, 0, 0, 7, 9, 0, 0, 0, 0, 0,''] #lop
    the_list.append((l))

    l = ['addiction', 0, 0, 0, 0, 0, 5, 8, 0, 0, 0, ''] #lop
    the_list.append((l))

    l = ['hanging', 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, ''] #lop
    the_list.append((l))


    return the_list

# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

#   make format_to data click

def make_data_click_format(sublist, count_list, reason_list, relation_list):
    the_list = []
    l = ['Genre']
    for x in sublist:
        l.append(x)
    l.append({ 'role': 'annotation' })
    the_list.append(l)

    for i in range(0, len(reason_list)):
        the_reason = reason_list[i] # get the reason
        l = []
        l.append(the_reason)
        for j in range(0, len(sublist)):
            if relation_list[j] == the_reason: #if that match with the reaon add count value to that index
                l.append(count_list[j])
            else:
                l.append(0)
        the_list.append(l)
    return the_list


# get results of reason updated format ++++++++++++++++++++++++++++++++++
def get_updated_reason():
    gk = df.groupby(['sub_reason']).size().reset_index(name='count')
    gk_reason = df.groupby(['fix_reason']).size().reset_index(name='count')

    the_sub_reason_list = gk['sub_reason'][:].tolist()
    the_count = gk['count'][:].tolist()
    the_reason_list = gk_reason['fix_reason'][:].tolist()

    # to make relation list
    size = len(df)
    the_relation_list = [0]*len(the_sub_reason_list)
    for i in range(0, size):
        if df['sub_reason'][i] in the_sub_reason_list:
            the_index = the_sub_reason_list.index(df['sub_reason'][i])
            the_relation_list[the_index] = df['fix_reason'][i]

    return make_data_click_format(the_sub_reason_list, the_count, the_reason_list, the_relation_list)


# -------------------------------------------the cluster----------------------------------------------------------------------------------
def get_the_cluster_list():
    reason_group = df.groupby(['fix_reason']).size().reset_index(name='count')
    # print(reason_group)
    the_list = []

    ## add reason
    for i in range(0, len(reason_group)):
        l = ["reason"]
        the_reason = reason_group['fix_reason'][i]
        l.append(the_reason)
        l.append(reason_group['count'][i])
        the_list.append(l)

    the_column = "fix_reason"
    list_value = ['addiction', 'domestic violence', 'fails', 'false accusation', 'family issue', 'mental & physical issue', 'proverty']
    for the_value in list_value:
        ## age_gorup ---------------------------------------------------------------------------
        the_frame = df.query(f'{the_column} == "{the_value}"')
        age_group = the_frame.groupby(['age_gorup']).size().reset_index(name='count')
        the_group = age_group
        # print(the_group)

        # fix age group
        # the_list = ['Teen', 'Youth', 'Middle-aged', 'Adult', 'Old']
        the_map = {}
        for i in range(0, len(the_group)):
            if the_group['age_gorup'][i] == 'teen':
                the_map['Teen'] = 0
            
            if the_group['age_gorup'][i] in ['yougth' ,'youth']:
                the_map['Youth'] = 0
            
            if the_group['age_gorup'][i] in ['middle-aged' ,'middled-aged']:
                the_map['Middle-aged'] = 0
            
            if the_group['age_gorup'][i] == 'adult':
                the_map['Adult'] = 0
            
            if the_group['age_gorup'][i] in ['.' ,'old']:
                the_map['Old'] = 0

        for i in range(0, len(the_group)):
            if the_group['age_gorup'][i] == 'teen':
                the_map['Teen'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] in ['yougth' ,'youth']:
                the_map['Youth'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] in ['middle-aged' ,'middled-aged']:
                the_map['Middle-aged'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] == 'adult':
                the_map['Adult'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] in ['.' ,'old']:
                the_map['Old'] += the_group['count'][i]

        reason_list = list(the_map.keys())
        the_count_list = list(the_map.values())

        for i in range(0, len(reason_list)):
            l = [the_value]
            the_reason = reason_list[i]
            l.append(the_reason)
            l.append(the_count_list[i])
            the_list.append(l)

        ## gender -------------------------------------------------------------
        the_frame = df.query(f'{the_column} == "{the_value}"')
        age_group = the_frame.groupby(['gender']).size().reset_index(name='count')
        the_group = age_group
        for i in range(0, len(the_group)):
            l = [the_value]
            the_reason = the_group['gender'][i]
            the_count = the_group['count'][i]
            l.append(the_reason)
            l.append(the_count)
            the_list.append(l)

        ## weather_main
        the_frame = df.query(f'{the_column} == "{the_value}"')
        age_group = the_frame.groupby(['weather_main']).size().reset_index(name='count')
        the_group = age_group
        for i in range(0, len(the_group)):
            l = [the_value]
            the_reason = the_group['weather_main'][i]
            the_count = the_group['count'][i]
            l.append(the_reason)
            l.append(the_count)
            the_list.append(l)
        
        ## profession_group
        the_frame = df.query(f'{the_column} == "{the_value}"')
        age_group = the_frame.groupby(['profession_group']).size().reset_index(name='count')
        area_profession_group = age_group

        profession_group = {}
        for i in range(0, len(area_profession_group)):
            if area_profession_group['profession_group'][i] in ['actor', 'musician', 'saint']:
                profession_group['actor'] = 0

            if area_profession_group['profession_group'][i] == 'businessman':
                profession_group['businessman'] = 0
            
            if area_profession_group['profession_group'][i] in ['day laborer', 'day labourer', 'day-laborer', 'worker']:
                profession_group['day labourer'] = 0
            
            if area_profession_group['profession_group'][i] == 'farmer':
                profession_group['farmer'] = 0

            if area_profession_group['profession_group'][i] in ['housewife', 'houswife']:
                profession_group['housewife'] = 0

            if area_profession_group['profession_group'][i] in ['doctor', 'engineer', 'gambler', 'service holder']:
                profession_group['service holder'] = 0
            
            if area_profession_group['profession_group'][i] in ['spotsman', 'stportsman']:
                profession_group['athlete'] = 0
            
            if area_profession_group['profession_group'][i] == 'student':
                profession_group['student'] = 0
            
            if area_profession_group['profession_group'][i] == 'teacher':
                profession_group['teacher'] = 0
            

        for i in range(0, len(area_profession_group)):
            if area_profession_group['profession_group'][i] in ['actor', 'musician', 'saint']:
                profession_group['actor'] += area_profession_group['count'][i]

            if area_profession_group['profession_group'][i] == 'businessman':
                profession_group['businessman'] += area_profession_group['count'][i]
            
            if area_profession_group['profession_group'][i] in ['day laborer', 'day labourer', 'day-laborer', 'worker']:
                profession_group['day labourer'] += area_profession_group['count'][i]
            
            if area_profession_group['profession_group'][i] == 'farmer':
                profession_group['farmer'] += area_profession_group['count'][i]

            if area_profession_group['profession_group'][i] in ['housewife', 'houswife']:
                profession_group['housewife'] += area_profession_group['count'][i]

            if area_profession_group['profession_group'][i] in ['doctor', 'engineer', 'gambler', 'service holder']:
                profession_group['service holder'] += area_profession_group['count'][i]
            
            if area_profession_group['profession_group'][i] in ['spotsman', 'stportsman']:
                profession_group['athlete'] += area_profession_group['count'][i]
            
            if area_profession_group['profession_group'][i] == 'student':
                profession_group['student'] += area_profession_group['count'][i]
            
            if area_profession_group['profession_group'][i] == 'teacher':
                profession_group['teacher'] += area_profession_group['count'][i]
            
        reason_list = list(profession_group.keys())
        the_count_list = list(profession_group.values())

        for i in range(0, len(reason_list)):
            l = [the_value]
            the_reason = reason_list[i]
            l.append(the_reason)
            l.append(the_count_list[i])
            the_list.append(l)
        
        ## economic_condition ---------------------------------------------------------------------------
        the_frame = df.query(f'{the_column} == "{the_value}"')
        age_group = the_frame.groupby(['economic_condition']).size().reset_index(name='count')
        the_group = age_group
        # print(the_group)

        # fix  group
        # the_list = ['upper class', 'upper middle class', 'middle class', 'lower middle class', 'lower class']
        the_map = {}
        for i in range(0, len(the_group)):
            if the_group['economic_condition'][i] in ['Upper Class', 'upper class']:
                the_map['upper class'] = 0
            
            if the_group['economic_condition'][i] in ['Upper Middle Class', 'Upper middle class', 'upper middle class']:
                the_map['upper middle class'] = 0
            
            if the_group['economic_condition'][i] in ['middle class', 'middle  class',' Middle class', 'Middle Class', 'MIddle class']:
                the_map['middle class'] = 0
            
            if the_group['economic_condition'][i] == 'lower middle class':
                the_map['lower middle class'] = 0
            
            if the_group['economic_condition'][i] in ['lower class', 'Lower-Middle Class', 'Lower middle class', 'Lower Middle Class']:
                the_map['lower class'] = 0
            

        for i in range(0, len(the_group)):
            if the_group['economic_condition'][i] in ['Upper Class', 'upper class']:
                the_map['upper class'] += the_group['count'][i]
            
            if the_group['economic_condition'][i] in ['Upper Middle Class', 'Upper middle class', 'upper middle class']:
                the_map['upper middle class'] += the_group['count'][i]
            
            if the_group['economic_condition'][i] in ['middle class', 'middle  class',' Middle class', 'Middle Class', 'MIddle class']:
                the_map['middle class'] += the_group['count'][i]
            
            if the_group['economic_condition'][i] == 'lower middle class':
                the_map['lower middle class'] += the_group['count'][i]
            
            if the_group['economic_condition'][i] in ['lower class', 'Lower-Middle Class', 'Lower middle class', 'Lower Middle Class']:
                the_map['lower class'] += the_group['count'][i]
            

        reason_list = list(the_map.keys())
        the_count_list = list(the_map.values())

        for i in range(0, len(reason_list)):
            l = [the_value]
            the_reason = reason_list[i]
            l.append(the_reason)
            l.append(the_count_list[i])
            the_list.append(l)

    
    return the_list


# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Comparism>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# reason vs age
def get_reason_vs_age_group():
    reason_group = df.groupby(['fix_reason']).size().reset_index(name='count')
    the_reason_list = reason_group['fix_reason'][:].tolist()

    the_column = "fix_reason"
    list_value = the_reason_list.copy()

    age_group = df.groupby(['age_gorup']).size().reset_index(name='count')
    the_vs_list = ['teen', 'youth', 'middle-aged', 'adult', 'old']

    the_list = []
    l = the_vs_list.copy()
    l.insert(0, 'reason')
    the_list.append(l)
    size = len(the_vs_list)+1
    for the_value in list_value:
        ## age_gorup ---------------------------------------------------------------------------
        the_frame = df.query(f'{the_column} == "{the_value}"')
        age_group = the_frame.groupby(['age_gorup']).size().reset_index(name='count')
        the_group = age_group
        # print(the_group)

        # fix age group
        # the_list = ['Teen', 'Youth', 'Middle-aged', 'Adult', 'Old']
        the_map = {}
        for i in range(0, len(the_group)):
            if the_group['age_gorup'][i] == 'teen':
                the_map['teen'] = 0
            
            if the_group['age_gorup'][i] in ['yougth' ,'youth']:
                the_map['youth'] = 0
            
            if the_group['age_gorup'][i] in ['middle-aged' ,'middled-aged']:
                the_map['middle-aged'] = 0
            
            if the_group['age_gorup'][i] == 'adult':
                the_map['adult'] = 0
            
            if the_group['age_gorup'][i] in ['.' ,'old']:
                the_map['old'] = 0

        for i in range(0, len(the_group)):
            if the_group['age_gorup'][i] == 'teen':
                the_map['teen'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] in ['yougth' ,'youth']:
                the_map['youth'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] in ['middle-aged' ,'middled-aged']:
                the_map['middle-aged'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] == 'adult':
                the_map['adult'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] in ['.' ,'old']:
                the_map['old'] += the_group['count'][i]

        reason_list = list(the_map.keys())
        the_count_list = list(the_map.values())

        l = [0]*size
        l[0] = the_value

        for i in range(0, len(reason_list)):
            the_reason = reason_list[i]
            the_index = the_vs_list.index(the_reason)+1
            l[the_index]  =  the_count_list[i]
        the_list.append(l)
    
    return the_list

# reason vs gender
def get_reason_vs_gender():
    reason_group = df.groupby(['fix_reason']).size().reset_index(name='count')
    the_reason_list = reason_group['fix_reason'][:].tolist()

    the_column = "fix_reason"
    list_value = the_reason_list.copy()

    age_group = df.groupby(['gender']).size().reset_index(name='count')
    the_vs_list = age_group['gender'][:].tolist()

    the_list = []
    l = the_vs_list.copy()
    l.insert(0, 'reason')
    the_list.append(l)
    size = len(the_vs_list)+1
    for the_value in list_value:
        ## gender -------------------------------------------------------------
        the_frame = df.query(f'{the_column} == "{the_value}"')
        age_group = the_frame.groupby(['gender']).size().reset_index(name='count')
        the_group = age_group

        l = [0]*size
        l[0] = the_value

        for i in range(0, len(the_group)):
            the_reason = the_group['gender'][i]
            the_index = the_vs_list.index(the_reason)+1
            l[the_index]  =  the_group['count'][i]
        the_list.append(l)
    
    return the_list


# method vs gender group
def get_method_vs_gender():

    reason_group = df.groupby(['fix_method']).size().reset_index(name='count')
    the_reason_list = reason_group['fix_method'][:].tolist()

    the_column = "fix_method"
    list_value = the_reason_list.copy()

    age_group = df.groupby(['gender']).size().reset_index(name='count')
    the_vs_list = age_group['gender'][:].tolist()

    the_list = []
    l = the_vs_list.copy()
    l.insert(0, 'reason')
    the_list.append(l)
    size = len(the_vs_list)+1
    for the_value in list_value:
        ## gender -------------------------------------------------------------
        the_frame = df.query(f'{the_column} == "{the_value}"')
        age_group = the_frame.groupby(['gender']).size().reset_index(name='count')
        the_group = age_group

        l = [0]*size
        l[0] = the_value

        for i in range(0, len(the_group)):
            the_reason = the_group['gender'][i]
            the_index = the_vs_list.index(the_reason)+1
            l[the_index]  =  the_group['count'][i]
        the_list.append(l)

    return the_list

# economic_vs_age
def get_economic_vs_age():
    the_reason_list = ['upper class', 'upper middle class', 'middle class', 'lower middle class', 'lower class']

    the_column = "fix_economic_condition"
    list_value = the_reason_list.copy()

    age_group = df.groupby(['age_gorup']).size().reset_index(name='count')
    the_vs_list = ['teen', 'youth', 'middle-aged', 'adult', 'old']

    the_list = []
    l = the_vs_list.copy()
    l.insert(0, 'reason')
    the_list.append(l)
    size = len(the_vs_list)+1
    for the_value in list_value:
        ## age_gorup ---------------------------------------------------------------------------
        the_frame = df.query(f'{the_column} == "{the_value}"')
        age_group = the_frame.groupby(['age_gorup']).size().reset_index(name='count')
        the_group = age_group
        # print(the_group)

        # fix age group
        # the_list = ['Teen', 'Youth', 'Middle-aged', 'Adult', 'Old']
        the_map = {}
        for i in range(0, len(the_group)):
            if the_group['age_gorup'][i] == 'teen':
                the_map['teen'] = 0
            
            if the_group['age_gorup'][i] in ['yougth' ,'youth']:
                the_map['youth'] = 0
            
            if the_group['age_gorup'][i] in ['middle-aged' ,'middled-aged']:
                the_map['middle-aged'] = 0
            
            if the_group['age_gorup'][i] == 'adult':
                the_map['adult'] = 0
            
            if the_group['age_gorup'][i] in ['.' ,'old']:
                the_map['old'] = 0

        for i in range(0, len(the_group)):
            if the_group['age_gorup'][i] == 'teen':
                the_map['teen'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] in ['yougth' ,'youth']:
                the_map['youth'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] in ['middle-aged' ,'middled-aged']:
                the_map['middle-aged'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] == 'adult':
                the_map['adult'] += the_group['count'][i]
            
            if the_group['age_gorup'][i] in ['.' ,'old']:
                the_map['old'] += the_group['count'][i]

        reason_list = list(the_map.keys())
        the_count_list = list(the_map.values())

        l = [0]*size
        l[0] = the_value

        for i in range(0, len(reason_list)):
            the_reason = reason_list[i]
            the_index = the_vs_list.index(the_reason)+1
            l[the_index]  =  the_count_list[i]
        the_list.append(l)
    return the_list
